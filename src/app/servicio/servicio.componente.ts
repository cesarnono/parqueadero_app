import { Component,EventEmitter, Output} from '@angular/core';

@Component(
    {
        selector: 'servicio-parqueadero',
        templateUrl : './servicio.componente.html'
    }
)
export class ServicioComponente {

    @Output() 
    mostrarRegistroEntradaEvent = new EventEmitter();
    

    mostrarRegistroEntrada(){
        this.mostrarRegistroEntradaEvent.emit();
    }


}