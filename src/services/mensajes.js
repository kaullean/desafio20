import { Mensajes } from "../persistencia/mensajes";
class MensajesService {

    async leer(){
        
        return await Mensajes.getAll();
    }

    async agregar(unMensaje) {

        return Mensajes.add(unMensaje);
    }
 
}

export const mensajesService = new MensajesService();