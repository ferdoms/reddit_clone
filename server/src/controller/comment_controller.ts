import * as express from "express";
import * as joi from "joi";
import { getCommentRepository } from "../repositories/comment_repository";
import { getVoteRepository } from "../repositories/vote_repository";
import { authMiddleware } from "../middleware/middleware";

export function getCommentController() {

    // Create respository so we can perform database operations
    const commentRepository = getCommentRepository();
    const voteRepository = getVoteRepository();

    // Create router instance so we can declare enpoints
    const router = express.Router();

    // Declare Joi Schema so we can validate comments
    const commentSchemaForPost = {
        user: joi.number(),
        link: joi.number(),
        comment: joi.string(),
    };
    

    
    router.delete("/:id",authMiddleware, (req, res) => {
        (async () => {
            const userId = (req as any).userId;
            const id = req.params.id;
            let comment = await commentRepository.findOne(id);
            if (comment == undefined ){
                res.status(404).send({ msg: "Comment not found!" });
            }
            comment = await commentRepository.findOne({id:id, user:userId})
            if(comment == undefined ){
                res.status(400).send({ msg: "Bad request!" });
            } else {
                const comments = await commentRepository.delete(comment);
                res.json(comments);
            }
        })();
    });
    
    router.post("/", authMiddleware, (req, res) => {
        (async () => {
            const newComment = req.body;
            const result = joi.validate(req.body, commentSchemaForPost);
            if (result.error) {
                res.status(400).send({ msg: "Comment is not valid!" });
            } else {
                const comments = await commentRepository.save(newComment);
                res.json(comments);
            }
        })();
    });
    router.patch("/:id", authMiddleware, (req, res) => {
        (async () => {
            const newComment = req.body;
            const id = req.params.id;
            const result = joi.validate(req.body, commentSchemaForPost);
            if (result.error) {
                res.status(400).send({ msg: "Comment is not valid!" });
            } else {
                const userId = (req as any).userId;
                let oldComment = await commentRepository.findOne(id);
                if (oldComment == undefined ){
                    res.status(404).send({ msg: "Comment not found!" });
                }
                oldComment = await commentRepository.findOne({id:id, user:userId})
                if(oldComment == undefined ){
                    res.status(400).send({ msg: "Bad request!" });
                } else {

                oldComment.content = newComment.comment;
                console.log(oldComment)
                const comments = await commentRepository.save(oldComment);
                res.json(comments);
                }
            }
            

        })();
    });



    return router;
}