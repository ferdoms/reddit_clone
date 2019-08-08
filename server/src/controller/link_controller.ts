import * as express from "express";
import * as joi from "joi";
import { getLinkRepository } from "../repositories/link_repository";
import { getVoteRepository } from "../repositories/vote_repository";
import { authMiddleware } from "../middleware/middleware";
import { getCommentRepository } from "../repositories/comment_repository";

export function getLinkController() {

    // Create respository so we can perform database operations
    const linkRepository = getLinkRepository();
    const voteRepository = getVoteRepository();
    const commentRepository = getCommentRepository();

    // Create router instance so we can declare enpoints
    const router = express.Router();

    // Declare Joi Schema so we can validate links
    const linkSchemaForPost = {
        user: joi.number(),
        title: joi.string(),
        link: joi.string(),
    };
    
    router.get("/", (req, res) => {
        (async () => {
            const links = await linkRepository.find();
            res.json(links);
        })();
    });
    
    router.get("/:id", (req, res) => {
        (async () => {
            const id = req.params.id;
            const link = await linkRepository
            .createQueryBuilder("link")
            .leftJoinAndSelect("link.comment", "comment")
            .where("link.id = :id", {id: id})
            .getOne();
            res.json(link);
        })();
    });
    
    router.delete("/:id", authMiddleware, (req, res) => {
        (async () => {
            const userId = (req as any).userId;
            const id = req.params.id;
            let link = await linkRepository.findOne(id);
            if (link == undefined ){
                res.status(404).send({ msg: "Comment not found!" });
            }
            link = await linkRepository.findOne({id:id, user:userId})
            if(link == undefined ){
                res.status(400).send({ msg: "Bad request!" });
            } else {
                const comments = await commentRepository.delete({link: link})
                const votes = await voteRepository.delete({link: link})
                const linkDeleted = await linkRepository.delete(link);
                res.json(linkDeleted);
            }
        })();
    });
    
    router.post("/", authMiddleware, (req, res) => {
        (async () => {
            const newLink = req.body;
            const result = joi.validate(req.body, linkSchemaForPost);
            if (result.error) {
                res.status(400).send({ msg: "Link is not valid!" });
            } else {
                const links = await linkRepository.save(newLink);
                res.json(links);
            }
        })();
    });
    
    router.post("/:id/upvote",  authMiddleware, (req, res) => {
        (async () => {
            let linkId = req.params.id;
            const userId = (req as any).userId;
            const voted = await voteRepository.findOne({ link: linkId, user: userId})
            if(voted){
                voted.isPositive=true
                const vote = await voteRepository.save(voted);
                res.json(vote);
            }else{
                const vote = await voteRepository.save({vote:true, link: linkId, user: userId});
                res.json(vote);
            }
            
            
        })();
    });

    router.post("/:id/downvote",  authMiddleware, (req, res) => {
        (async () => {
            const userId = (req as any).userId;
            let linkId = req.params.id;
            const voted = await voteRepository.findOne({ link: linkId, user: userId})
            if(voted){
                voted.isPositive=false
                const vote = await voteRepository.save(voted);
                res.json(vote);
            }else{
                const vote = await voteRepository.save({vote:false, link: linkId, user: userId});
                res.json(vote);
            }
            
        })();
    });

    return router;
}