import knex from 'knex';
import mongoose, { model } from 'mongoose'
import * as modelProductos from '../models/productos'

const URL= 'mongodb://localhost:27017/ecommerce';

( async()=>{
  try{
    let rta = await mongoose.connect(URL,{
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log("DB MONGOOSE CONECTED");
  }
  catch(e){
    console.log("Error",e);
  }
})()