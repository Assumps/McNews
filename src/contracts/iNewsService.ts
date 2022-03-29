import { Result } from "../infra/result";
import { News } from "../models/news";
import { IService } from "./iService";

export interface INewsService extends IService<News>{}