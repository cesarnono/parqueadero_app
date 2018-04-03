import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map';
import { Cobro } from '../modelo/cobro.modelo'

@Injectable()
export class SalidaService {
    private serviceUrl = 'http://localhost:8181/salida';
    constructor(private http: Http) { }

    registrarSalida(idCobro: number) {
        return this.http.get(this.serviceUrl + '?id=' + idCobro).map(res => {
            console.log(res.json());
            let item = res.json();
           // return res.json().map(item => {
                let cobro: Cobro = new Cobro();
                cobro.id = item.id;
                cobro.placa = item.placa;
                cobro.fechaEntrada = item.fechaEntrada;
                cobro.fechaSalida = item.fechaSalida;
                cobro.cilindraje = item.cilindraje;
                cobro.descripcionTiempoServicio = item.descripcionTiempoServicio;
                cobro.valorServicio = item.valorServicio;
                return cobro;
            //}
            //)
        });
    }
}
