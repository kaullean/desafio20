import * as modelProductos from '../models/productos'

class ProductosPersistencia {
  async getAll() {
    
    console.log('Leyendo todo');
    let productos=await modelProductos.productos.find({})
    return productos;
  }

  async get(id) {
    console.log('Buscando Id : ',id);
    let producto =await modelProductos.productos.find({_id:id})
    return producto;
  }

  async add(data) {
    console.log("agregando");
    const productoSaveModel = new  modelProductos.productos(data);
    let productoSave = await productoSaveModel.save()
    return productoSave;
  }

  async update(id, data) {
    console.log("actualizando");
    let productoUpdate = await modelProductos.productos.updateOne({_id:id},{
      $set:{titulo:data.titulo,precio:data.precio,imgUrl:data.imgUrl}
    })
    return productoUpdate;
  }

  async delete(id) {
    console.log("borrando",id);
    let productoDelete = await modelProductos.productos.deleteOne({_id:id})
    return productoDelete;
  }
}

export const Productos = new ProductosPersistencia();