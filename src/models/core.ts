import { Document } from 'mongoose'

export abstract class Core extends Document {

    titulo: string;
    texto: string;
    imagem: string;
    dataPublicacao: Date;
    tags: String;
    link: String;
    ativo: Boolean;

}