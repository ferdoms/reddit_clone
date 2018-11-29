import * as express from 'express';
import { commentRepository } from '../repositories/comment';

export function getCommentController(){
    
    const router = express.Router();

    // HTTP POST http://localhost:8080/api/v1/comments
    // Creates a new link
    router.post("/", (req, res)=>{
        (async() => {
            const newComment = req.body;
            const comment = await commentRepository().save(newComment);

            res.json(comment);


        })()
    })

    // HTTP PATCH http://localhost:8080/api/v1/comments/:id
    // Updates the content of the comment

    // HTTP DELETE http://localhost:8080/api/v1/comments/:id
    // Deletes a comment

    return router;
}