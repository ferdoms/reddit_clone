import * as express from 'express';
import { linkRepository } from '../repositories/link';
import { Vote } from '../entities/vote';
import { voteRepository } from '../repositories/vote';
import { commentRepository } from '../repositories/comment';

export function getLinksController(
    
){
    
    const router = express.Router();

    // HTTP GET http://localhost:8080/api/v1/links
    // return all links
    router.get("/", (req, res) => {
        (async () => {
            await linkRepository().find()
                .then(links=> res.json(links))
                .catch(err=>{
                    console.log(`Error on trying to find links:\n${err}`)
                    res.status(500).send({msg:"Internal Server Error"})
                })
        })();
    });

    // HTTP GET http://localhost:8080/api/v1/links/:id
    // Returns a link and its comments
    router.get("/:id", (req, res) => {
        (async () => {
            (async () => {
                const linkIdStr = req.params.id as string;
                const linkIdNbr = parseInt(linkIdStr);
                if (isNaN(linkIdNbr)) {
                    res.status(400).send({
                        msg: "Id must be a number!"
                    });
                }
                await linkRepository().findOne(linkIdNbr)
                    .then(link => {
                        if(link){
                            res.json(link)
                        }else{res.status(404).send({msg:"Not found!"})}
                    });
            })();
        
        })();
    });
    

    // HTTP POST http://localhost:8080/api/v1/links
    // Creates a new link
    router.post("/", (req, res)=>{
        (async() => {
            const newLink = req.body;
            await linkRepository().save(newLink)
                .then(() => res.json(newLink))
                .catch(err => {
                    console.log(`Error on trying to save link:\n${err}`)
                    res.status(400).send({
                        msg: "Bad Request"
                    });
                });
        })()
    })
    // HTTP DELETE http://localhost:8080/api/v1/links/:id
    // Deletes a link
    router.delete("/:id", (req, res) => {
            (async () => {
                const linkIdStr = req.params.id as string;
                const linkIdNbr = parseInt(linkIdStr);
                if (isNaN(linkIdNbr)) {
                    res.status(400).send({
                        msg: "Id must be a number!"
                    });
                }
                const link = await linkRepository().findOne(linkIdNbr)
                
                if(!link){
                    return res.status(404).send({msg:"Not found!"})
                }

                await linkRepository().delete(linkIdNbr)
                    .then(()=> res.json({msg:"Item deleted"}))
                    .catch( err => {
                        console.log(`Error on trying to delete link:\n${err}`)
                        res.status(500).send({msg:"Internal Server Error"})});
            })();
    });

    // HTTP POST http://localhost:8080/api/v1/links/:id/upvote
    // Upvote link
    router.post("/:id/upvote", (req, res)=>{
        (async() => {
            const vote:Vote = req.body;
            vote.link = req.params.id;
            vote.isUpvoted = true;
            await voteRepository().save(vote)
                .then(() => res.json(vote))
                .catch(async err => {
                    console.log(`Error on trying to save link:\n${err}`);
                    res.status(400).send({
                        msg: "Bad Request"
                    });
                });
        })()
    })
    // HTTP POST http://localhost:8080/api/v1/links/:id/downvote
    // Downvote link
    router.post("/:id/downvote", (req, res)=>{
        (async() => {
            const vote:Vote = req.body;
            vote.link = req.params.id;
            vote.isUpvoted = false;
            await voteRepository().save(vote)
                .then(() => res.json(vote))
                .catch(async err => {
                    console.log(`Error on trying to save link:\n${err}`);
                    res.status(400).send({
                        msg: "Bad Request"
                    });
                })

        })()
    })

    return router;
}