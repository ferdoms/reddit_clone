import * as express from 'express';

export function loggerMiddleware(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
) {
    console.log(req.url);
    next();
}