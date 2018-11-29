import * as express from 'express';
import { userRepository } from '../repositories/user';
import { User } from '../entities/user';

export function getUsersController(){
    
    const router = express.Router();

    // HTTP POST http://localhost:8080/api/v1/users
    // Creates a new user account
    router.post("/", (req, res)=>{
        (async() => {
            const newUser:User = req.body;
            const user = await userRepository().save(newUser)
                .then(()=>res.json(newUser))
                .catch(err => {
                    console.log(`Error on trying to save user:\n${err}`)
                    res.status(400).send({
                        msg: "Email has been taken, or password has not valid"
                    });
                });
            
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
            await userRepository().findOne(userIdNbr)
                .then(async (user) => {
                    if(user){
                        var activities = await user.getActivities();
                        res.json(activities);
                    } else {res.status(404).send({msg:"Not found!"})}
                })
                .catch(err=>{
                    console.log(`Error on trying to find user:\n${err}`)
                    res.status(500).send({msg:"Internal Server Error"})
                })
        })();
    });

    return router;
}