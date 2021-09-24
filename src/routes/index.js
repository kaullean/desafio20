import { Router } from 'express'
import productosRouter from './productos'



const miRouter = Router();

miRouter.use('/api/productos', productosRouter)


miRouter.get('/', (req, res) =>{
    const data = {
        layout: 'index',
        hayDatos: false,
    }
    res.render('main',data)
})


export default miRouter;