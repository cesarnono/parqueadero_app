import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions,Response  } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Solicitud } from '../modelo/solicitud.modelo';
import { Servicio } from '../modelo/servicio.modelo';
import { Cobro } from '../modelo/cobro.modelo';
@Injectable()
export class EntradaService {
    private serviceUrl = 'http://localhost:8181/entrada';


    constructor(private http: Http) {

    }

    registrarEntrada(servicio: Servicio){
        let headers = new Headers({
            'Content-Type': 'application/json'
        });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.serviceUrl, servicio, options).map(res => {
            let data = res.json();
            let  cobro = new Cobro();
            cobro.id = data.id;
            cobro.placa = data.placa;
            cobro.error = data.error;
            return cobro;
        })
    }

   /* private manejarErrorObservable(error: Response | any) {
        console.error(error.message || error);
        return Observable.throw(error.message || error);
    }*/

    /* private extraerDatos(res:Response,index:number){
       let body  = res.json();
       return body || {};
     }*/
}