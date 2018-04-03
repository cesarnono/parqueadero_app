import {Component } from '@angular/core';
import {Cobro} from '../modelo/cobro.modelo';

@Component({
    selector: 'salida-parqueadero',
    templateUrl: './salida.componente.html'
})
export class SalidaComponente { 
     cobroSalida : Cobro = new Cobro();
     
}