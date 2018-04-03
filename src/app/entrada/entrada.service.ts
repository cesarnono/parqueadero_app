import { Injectable} from '@angular/core';
import {Http } from '@angular/http';
import { Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map';
import {Solicitud} from '../modelo/solicitud.modelo'
@Injectable()
export class EntradaService {
    private serviceUrlVerificar ='http://localhost:8181/disponibilidad';
    constructor(private http:Http){

    }

    verificarDisponibilidadServicio(solicitud:Solicitud){
        //this.http.post();
    }
}