import { Component} from '@angular/core';
import { Solicitud} from '../modelo/solicitud.modelo'


@Component({
    selector: 'entrada-parqueadero',
    templateUrl: './entrada.componente.html'
})
export class EntradaComponente {
   private solicitud : Solicitud;

   private placa :string;
   private cilindraje:number;

    validarDisponibilidadServicio(){
         this.solicitud = new Solicitud();
         this.solicitud.placa = this.placa;
         this.solicitud.cilindraje = this.cilindraje;
         console.log(this.solicitud.placa);
         console.log( this.solicitud.cilindraje);
    }
    
}