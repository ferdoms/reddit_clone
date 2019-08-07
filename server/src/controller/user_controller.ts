import * as express from "express";
import { getUserRepository } from "../repositories/user_repository";
import * as joi from "joi";

export function getUserController() {

    const userRepository = getUserRepository();
    const router = express.Router();

    const userDetailsSchema = {
        email: joi.string().email(),
        password: joi.string()
    };

    // HTTP POST http://localhost:8080/users/
    router.post("/", (req, res) => {
        (async () => {
            const newUser = req.body;
            const result = joi.validate(newUser, userDetailsSchema);
            const hasEmail = await userRepository.findOne({email: req.body.email})
            if (result.error || hasEmail) {
                res.status(400).send();
            }else{
                const user = await userRepository.save(newUser);
                res.json({ ok: "ok" }).send();
            }
        })();
    });

    router.get("/:id", (req, res) => {
        (async () => {
            const userId:number = req.params.id;
            const user = await userRepository
            .createQueryBuilder("user")
            .leftJoinAndSelect("user.link", "links")
            .leftJoinAndSelect("user.comment", "comments")
            .where("user.id = :id", {id: userId})
            .getOne();

            if(user == undefined){
                res.status(404).send({ msg: "User not found!" });
            }
            res.json(user);

        })();
    });
 

    return router;
}