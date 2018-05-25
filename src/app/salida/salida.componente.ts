import {Component,Input ,Output,EventEmitter} from '@angular/core';
import {Cobro} from '../modelo/cobro.modelo';
import { SalidaService } from './salida.service';

@Component({
    selector: 'salida-parqueadero',
    templateUrl: './salida.componente.html',
    providers :[SalidaService]
})
export class SalidaComponente { 
     @Input() cobroSalida : Cobro ;
     @Output() registrarSalidaEmitter = new EventEmitter<string>();

     constructor(private salidaService: SalidaService){
     }
     registrarSalida() {
        if(confirm('Esta seguro de registrar la salidad para vehiculo con placa: '+this.cobroSalida.placa+'?')){
          this.salidaService.registrarSalida(this.cobroSalida.id).subscribe(data =>{
            this.cobroSalida = data;
            //this.ngOnInit();
            this.registrarSalidaEmitter.emit('PENDIENTE');
          });
        }
         
    }
     
}