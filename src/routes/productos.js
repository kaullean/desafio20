import { Router } from 'express'
import { socketService } from '../services/socket';
import { productosService } from '../services/productos';

const miRouter = Router();

miRouter.get('/listar',async (req, res) => {
    /* 
        Responde con los productos cargados, si los hay
    */
    let productos= await productosService.leer();
    if(productos.length===0){
        return res.status(404).json({
            error:"No hay productos cargados"
        });
    }
    else
        return res.status(201).json(productos);
})

miRouter.get('/listar/:id',async (req, res) => {
    /* 
        Responde con el producto correspondiente al 
        id buscado en caso de encontrarlo
    */
    let productos= await productosService.leer();
    if(productos.length===0){
        return res.status(404).json({
            error:"No hay productos cargados"
        });
    }
    let productoBuscado=await productosService.obtenerUnProducto(req.params.id);
    if(!productoBuscado){
        return res.status(404).json({
            error:"No hay productos cargados"
        });
    }
    if(productoBuscado === -1){
        return res.status(404).json({
            error:"producto no encontrado"
        });
    }
    else
        return res.status(201).json(productoBuscado);
})

miRouter.post('/guardar',async (req,res)=>{
    /* 
        Guarda un producto y responde 
        con el producto que se guardo
    */
   
    let productoIngresado = req.body;
    
    productoIngresado.precio = parseInt(productoIngresado.precio)

    productoIngresado =await productosService.agregar(productoIngresado);
    
    const myWSServer = socketService.getServer();

    myWSServer.emit('nuevoProducto', productoIngresado);
    return res.status(201).json(productoIngresado);
    
})

miRouter.put('/actualizar/:id',async (req, res) =>{
    /* 
        Actualiza un producto y responde con el producto actualizado
    */
    let productos= await productosService.leer();
    if(productos.length===0){
        return res.status(404).json({
            error:"No hay productos cargados"
        });
    }
    let productoIngresado= req.body;
    let idBuscado= req.params.id;
    let data = await productosService.actualizar(idBuscado,productoIngresado)
    if(!data){
        return res.status(404).json({
            error:"No hay productos cargados"
        });
    }
    if(data === -1){
        return res.status(404).json({
            error:"Id no encontrado"
        });
    }
    else{
        return res.status(201).json(data);    
    }

})

miRouter.delete('/borrar/:id',async (req, res) => {
    /* 
        Elimina un producto y responde con el producto eliminado
    */
    let productos= await productosService.leer();
    if(productos.length===0){
        return res.status(404).json({
            error:"No hay productos cargados"
        });
    }
    let idBuscado= req.params.id;
    let productoBorrado=await productosService.obtenerUnProducto(req.params.id);
    let data = await productosService.eliminar(idBuscado)
    console.log(data);
    if(!data){
        return res.status(404).json({
            error:"Id no encontrado"
        });
    }
    else{
        return res.status(201).json(productoBorrado);    
    }
})
export default miRouter;