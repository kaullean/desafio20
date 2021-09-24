import {Productos} from '../persistencia/productos'

class ProductosService {
    //Leer devuelve false si no hay productos y los productos si los hay
    leer(){
        return Productos.getAll()
    }
    obtenerUnProducto(idDelProducto)
    {
        return Productos.get(idDelProducto);
    }
    agregar(unProducto){

        return Productos.add(unProducto);
    }
    actualizar(idDelProducto,productoActualizado){

        return Productos.update(idDelProducto, productoActualizado)
    }
    eliminar(idAEliminar){

        return Productos.delete(idAEliminar)
    }
}

export const productosService = new ProductosService();