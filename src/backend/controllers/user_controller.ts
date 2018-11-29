import * as express from 'express';
import { userRepository } from '../repositories/user';

export function getUsersController(){
    
    const router = express.Router();

    // HTTP POST http://localhost:8080/api/v1/users
    // Creates a new user account
    router.post("/", (req, res)=>{
        (async() => {
            const newUser = req.body;
            const user = await userRepository().save(newUser);
            res.json(user);
        })()
    })


    
    // HTTP GET http://localhost:8080/api/v1/users/:id
    // Returns an user with all its activity (links and comments)
    router.get("/:id", (req, res) => {
        (async () => {
            const userIdStr = req.params.id as string;
            const userIdNbr = parseInt(userIdStr);
            if (isNaN(userIdNbr)) {
                res.status(400).send({
                    msg: "Id must be a number!"
                });
            }
            const user = await userRepository().findOne(userIdNbr);
            if(user){
                var activities = await user.getActivities();
                console.log(activities)
                res.json(activities);
            }else{
                res.status(404).send({msg:"Not found!"})
            }
            
        })();
    });

    return router;
}