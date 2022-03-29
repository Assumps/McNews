import 'reflect-metadata'
import express, {Application, Request, Response } from 'express';
import Database from './src/infra/db';
import { container } from 'tsyringe';
import './src/shared/container'
import { NewsController } from './src/controller/newsController';
import { VideosController } from './src/controller/videosController';
import { GaleriaController } from './src/controller/galeriaController';

class StartUp{

    public app: Application;
    private _db: Database = new Database();


    private news = container.resolve(NewsController);
    private videos = container.resolve(VideosController);
    private galeria = container.resolve(GaleriaController);

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
            return this.news.get(request,response)
        });

        this.app.route("/api/v1/news/:id").get((request: Request, response: Response) => {
            return this.news.getById(request,response)
        });

        this.app.route("/api/v1/videos/:page/:qtd").get((request: Request, response: Response) => {
            return this.videos.get(request,response)
        });

        this.app.route("/api/v1/videos/:id").get((request: Request, response: Response) => {
            return this.videos.getById(request,response)
        });

        this.app.route("/api/v1/galeria/:page/:qtd").get((request: Request, response: Response) => {
            return this.galeria.get(request,response)
        });

        this.app.route("/api/v1/galeria/:id").get((request: Request, response: Response) => {
            return this.galeria.getById(request,response)
        });

    }
    
}

export default new StartUp();