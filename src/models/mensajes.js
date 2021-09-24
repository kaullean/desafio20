import mongoose from 'mongoose'

const mensajesCollection = 'mensajes';

const MensajesSchema= new mongoose.Schema({
    user: {type:String, require:true},
    mensaje: {type:String, require:true},
    msjTime: {type:Date, default: Date.now()}
})
export const mensajes = mongoose.model(mensajesCollection,MensajesSchema)