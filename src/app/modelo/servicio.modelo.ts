import { Solicitud} from './solicitud.modelo';

export class Servicio {
    descripcion : string;
    tarifaHora: number;
    tarifaDia:number;
    cupoDisponible: number;
    cantidadMaxima: number;
    solicitudServicio : Solicitud;
}