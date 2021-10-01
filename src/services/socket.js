import socketIo, { Socket } from 'socket.io'
import { formatoMensaje } from '../utils/mensajes'
import { mensajesService } from './mensajes'

class SocketService {

    initWSService(server){
        
        
        if(!this.myWSServer){
            this.myWSServer = socketIo(server);
            this.myWSServer.on('connection', (socket) =>{
                console.log("Nueva conexion");  
                
                
                /*Escucha nuevos mensajes*/
                socket.on('nuevo-mensaje',async (data) => {
                    data=formatoMensaje(data);
                    await mensajesService.agregar(data);
                    this.myWSServer.emit('nuevoMensaje',data)
                })

            });

        }
        return this.myWSServer;
    }

    getServer(){
        return this.myWSServer;
    }
}

export const socketService = new SocketService();