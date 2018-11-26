import * as express from 'express';

export function getAuthController(){

    const router = express.Router();

    // HTTP POST http://localhost:8080/api/v1/auth/login
    // Returns an auth token

    return router;
}