import server from './services/server'
import * as DB from './services/db';
const puerto=8080;


server.listen(puerto, () => console.log("Server up "+puerto))


