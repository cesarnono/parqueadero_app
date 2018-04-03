import {Injectable} from '@angular/core';
import {Http } from '@angular/http';
import { Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map';
import {Cobro} from '../modelo/cobro.modelo'

@Injectable()
export class ListaCobroServicio {
    private serviceUrl ='http://localhost:8181/getAllCobros';
    constructor(private http:Http){

    }
    getListaCobros(estado:string){
        return this.http.get(this.serviceUrl+'?estado='+estado).map(res => {
            console.log(res.json());
            return res.json().map(item =>{
                let cobro: Cobro = new Cobro();
                cobro.id = item.id;
                cobro.placa = item.placa;
                cobro.tipo = item.servicio.descripcion
                cobro.fechaEntrada = item.fechaEntrada;
                cobro.cilindraje = item.cilindraje;
                return cobro;
            }
            )
        });
    }
}