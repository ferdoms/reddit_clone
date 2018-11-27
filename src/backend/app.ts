import express from 'express';
import * as bodyParser from "body-parser";
import { Routes } from './routes';
import { connectDB } from './db';
import { getLinkRepository } from './repositories/link';

export class App {

    public app: express.Application;
    public routes: Routes = new Routes();

    constructor(){
        const connection = connectDB();
        this.app = express();
        this.config();
        this.routes.routes(this.app);

        
    }

    private config(){
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
    }

    async connectDB(){
        return await connectDB();
    }
    

}
