
import * as modelMensajes from '../models/mensajes' 
class MensajesPersistencia {
  async getAll() {
    
    console.log('Leyendo mensajes');
    let mensajes=await modelMensajes.mensajes.find({})
    return mensajes;
  }

  async add(data) {
    console.log("agregando mensaje");
    const mensajeSaveModel = new  modelMensajes.mensajes(data);
    let mensajeSave = await mensajeSaveModel.save()
    return mensajeSave;
  }
}

export const Mensajes = new MensajesPersistencia();