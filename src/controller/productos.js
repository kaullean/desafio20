import {Productos} from '../persistencia/productos'
import { ProductoAPI } from '../api/productos';
class ProductosControler {
    //Leer devuelve false si no hay productos y los productos si los hay
    leer(){
        return Productos.getAll()
    }
    obtenerUnProducto(idDelProducto)
    {
        return Productos.get(idDelProducto);
    }
    leerDesdeApi(){
        return ProductoAPI.get()
    }
    generar(cant){

        for(let i = 0 ;i<cant;i++){
            console.log("this.data");
            ProductoAPI.post()
        }


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

export const productosControler = new ProductosControler();