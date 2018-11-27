import * as express from 'express';

export function getLinksController(){
    
    const router = express.Router();

    // HTTP GET http://localhost:8080/api/v1/links
    // return all links
    router.get("/", (req, res) => {
        (async () => {
            // const movies = await movieRepository.find();
            // res.json(movies);
            const links = [
                {
                    id:1,
                    userID:1,
                    url:"www.facebook.com"
                },
                {
                    id:2,
                    userID:1,
                    url:"www.instagram.com"
                },
                {
                    id:3,
                    userID:2,
                    url:"www.google.com"
                },
            ]
            res.json(links);
        })();
    });

    // HTTP GET http://localhost:8080/api/v1/links/:id
    // Returns a link and its comments
    

    // HTTP POST http://localhost:8080/api/v1/links
    // Creates a new link

    // HTTP DELETE http://localhost:8080/api/v1/links/:id
    // Deletes a link

    // HTTP POST http://localhost:8080/api/v1/links/:id/upvote
    // Upvote link

    // HTTP POST http://localhost:8080/api/v1/links/:id/upvote
    // Downvote link
    
    return router;
}