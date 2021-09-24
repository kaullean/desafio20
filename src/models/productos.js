import mongoose from 'mongoose'

const productosCollection = 'productos';

const ProductosSchema= new mongoose.Schema({
    titulo: {type:String, require:true},
    precio: {type:Number,require:true},
    imgUrl: {type:String, require:true},
})

export const productos = mongoose.model(productosCollection,ProductosSchema)