import express from 'express'
import path from 'path'
import handlebars from 'express-handlebars'
import * as http from 'http';
import { socketService } from './socket';
import miRouter from '../routes/index';

const app = express();
const puerto = 8080;

const myHTTPServer = http.Server(app);
const myWSServer = socketService.initWSService(myHTTPServer)

const publicDir = path.resolve(__dirname, '../../public')
app.use(express.static(publicDir))

const layoutDir = path.resolve(__dirname, '../../views/layouts')

/*  HBS CONFIG  */
app.set('view engine', 'hbs');
app.engine('hbs', handlebars({
    layoutsDir:layoutDir,   
    extname:'hbs',
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

/* Router */
app.use('/', miRouter)

export default myHTTPServer;