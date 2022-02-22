"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./src/infra/db"));
const newsController_1 = __importDefault(require("./src/controller/newsController"));
class StartUp {
    constructor() {
        this._db = new db_1.default();
        this.app = (0, express_1.default)();
        this._db.createConnection();
        this.routes();
    }
    routes() {
        this.app.route("/").get((request, response) => {
            response.send({ versao: "0.0.1" });
        });
        this.app.route("/api/v1/news/:page/:qtd").get((request, response) => {
            return newsController_1.default.get(request, response);
        });
        this.app.route("/api/v1/news/:id").get((request, response) => {
            return newsController_1.default.getById(request, response);
        });
    }
}
exports.default = new StartUp();
