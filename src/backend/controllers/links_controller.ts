import * as express from 'express';
import { linkRepository } from '../repositories/link';

export function getLinksController(
    
){
    
    const router = express.Router();
    // const linkRepository= getLinkRepository();
    // HTTP GET http://localhost:8080/api/v1/links
    // return all links
    router.get("/", (req, res) => {
        (async () => {
            // const movies = await movieRepository.find();
            // res.json(movies);
             const links = await linkRepository().find();
            
             res.json(links);
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
                const link = await linkRepository().findOne(linkIdNbr);
                res.json(link);
            })();
        
        })();
    });
    

    // HTTP POST http://localhost:8080/api/v1/links
    // Creates a new link
    router.post("/", (req, res)=>{
        (async() => {
            const newLink = req.body;
            const link = await linkRepository().save(newLink);
            res.json("bla");


        })()
    })
    // HTTP DELETE http://localhost:8080/api/v1/links/:id
    // Deletes a link
    router.delete("/:id", (req, res) => {
        (async () => {
            (async () => {
                const linkIdStr = req.params.id as string;
                const linkIdNbr = parseInt(linkIdStr);
                if (isNaN(linkIdNbr)) {
                    res.status(400).send({
                        msg: "Id must be a number!"
                    });
                }
                const link = await linkRepository().findOne(linkIdNbr);
                if(await linkRepository().delete(linkIdNbr)){
                    res.json({
                        msg: "Item deleted."
                    });
                }
            })();
        
        })();
    });

    // HTTP POST http://localhost:8080/api/v1/links/:id/upvote
    // Upvote link

    // HTTP POST http://localhost:8080/api/v1/links/:id/upvote
    // Downvote link
    
    return router;
}