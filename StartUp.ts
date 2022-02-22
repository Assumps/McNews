import express, {Application, Request, Response } from 'express';
import Database from './src/infra/db';
import newsController from './src/controller/newsController';

class StartUp{

    public app: Application;
    private _db: Database = new Database();

    constructor(){
        this.app = express();
        this._db.createConnection();
        this.routes();
    }
    routes(){
        
        this.app.route("/").get((request: Request, response: Response) => {
            response.send({versao: "0.0.1"});
        });

        this.app.route("/api/v1/news/:page/:qtd").get((request: Request, response: Response) => {
            return newsController.get(request,response)
        });

        this.app.route("/api/v1/news/:id").get((request: Request, response: Response) => {
            return newsController.getById(request,response)
        });
    }
    
}

export default new StartUp();