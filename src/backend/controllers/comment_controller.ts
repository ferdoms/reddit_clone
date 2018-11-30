import * as express from 'express';
import { commentRepository } from '../repositories/comment';

export function getCommentController(){
    
    const router = express.Router();

    // HTTP POST http://localhost:8080/api/v1/comments
    // Creates a new comment
    router.post("/", (req, res)=>{
        (async() => {
            const newComment = req.body;
            await commentRepository().save(newComment)
                .then(comment => res.json(comment))
                .catch(err => {
                    console.log(`Error on trying to save comment:\n${err}`)
                    res.status(400).send({
                        msg: "Email has been taken, or password has not valid"
                    });
                });
        })()
    })

    // HTTP PATCH http://localhost:8080/api/v1/comments/:id
    // Updates the content of the comment

    router.patch("/:id", (req, res)=>{
        (async() => {
            const updatedComment = req.body;
            const commetnIdStr = req.params.id as string;
            const commentIdNbr = parseInt(commetnIdStr);
            if (isNaN(commentIdNbr)) {
                res.status(400).send({
                    msg: "Id must be a number!"
                });
            }

            const oldComment = await commentRepository().findOne(commentIdNbr);

            if(!oldComment){
                return res.status(404).send({msg:"Not found!"});
            }

            await commentRepository().update(oldComment.id,{comment: updatedComment.comment})
                .then(comment => res.json(comment))
                .catch(err => {
                    console.log(`Error on trying to save comment:\n${err}`)
                    res.status(400).send({
                        msg: "Bad request"
                    });
                });
        })()
    })

    // HTTP DELETE http://localhost:8080/api/v1/comments/:id
    // Deletes a comment

    router.delete("/:id", (req, res) => {
        (async () => {
            const commentIdStr = req.params.id as string;
            const commentIdNbr = parseInt(commentIdStr);
            if (isNaN(commentIdNbr)) {
                res.status(400).send({
                    msg: "Id must be a number!"
                });
            }
            const comment = await commentRepository().findOne(commentIdNbr);

            if(!comment){
                return res.status(404).send({msg:"Not found!"});
            }
            await commentRepository().delete(commentIdNbr)
                .then(()=> res.json({msg:"Item deleted"}))
                .catch(err=>{
                    console.log(`Error on trying to delete comment:\n${err}`)
                    res.status(500).send({msg:"Internal Server Error"})
                })
        })();
    });

    return router;
}