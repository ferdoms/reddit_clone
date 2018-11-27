import { getAuthController } from './controllers/auth_controller';
import { getLinksController } from './controllers/links_controller';
import { getUsersController } from './controllers/user_controller';
import { getCommentController } from './controllers/comment_controller';


const ROOT_PATH = '/api/v1';

export class Routes {
    

    public routes(app:any){
        //home
        app.get(ROOT_PATH, (req:any,res:any) => {
            (async ()=>{
                res.status(200).send({
                message: 'GET request successfulll!!!!'
                })
            })();
        });

        // auth
        const authController = getAuthController();
        app.use(ROOT_PATH + '/auth', authController);
        
        // links
        const linksController = getLinksController();
        app.use(ROOT_PATH + '/links', linksController);
        
        // user
        const usersController = getUsersController();
        app.use(ROOT_PATH + '/users', usersController);

        // comment
        const commentController = getCommentController();
        app.use(ROOT_PATH + '/comment', commentController);

    }

}