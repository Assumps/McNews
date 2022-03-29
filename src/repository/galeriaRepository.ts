import mongoose from "mongoose";
import { Fotos } from "../models/fotos";
import { Galeria } from "../models/galeria";

const GaleriaSchema = new mongoose.Schema<Galeria>({
    titulo: {type: String },
    texto: {type: String },
    fotos: [Array<Fotos>()],
    dataPublicacao: {type: Date },
    ativo: {type: Boolean}
})

export const GaleriaRepository = mongoose.model<Galeria>("galeria", GaleriaSchema)