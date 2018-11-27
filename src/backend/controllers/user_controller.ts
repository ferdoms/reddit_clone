import * as express from 'express';

export function getUsersController(){
    
    const router = express.Router();

    // HTTP POST http://localhost:8080/api/v1/users
    // Creates a new user account


    
    // HTTP GET http://localhost:8080/api/v1/users/:id
    // Returns and user with all its activity (links and comments)


    return router;
}