import { Component,EventEmitter, Output} from '@angular/core';
import { Solicitud } from '../modelo/solicitud.modelo'
import {Servicio} from '../modelo/servicio.modelo'
import {Cobro} from '../modelo/cobro.modelo'
import {EntradaService} from './entrada.service'
import {ListaCobroComponente } from '../lista-cobro/lista-cobro.componente';
import {ListaCobroServicio} from '../lista-cobro/lista-cobro.service';


@Component({
    selector: 'entrada-parqueadero',
    templateUrl: './entrada.componente.html',
    providers: [EntradaService,ListaCobroComponente,ListaCobroServicio]

})
export class EntradaComponente {
    private entradaRegistrada: Cobro= new Cobro();
    private placa: string;
    private cilindraje: string;    

    @Output() addEntradaEvent = new EventEmitter<string>();

    constructor(private entradaService : EntradaService,private listaCobroComponente:ListaCobroComponente){
        
    }

    registrarEntrada() {
        let servicio: Servicio = this.crearSolicitudServicio();
        this.entradaService.registrarEntrada(servicio).subscribe(res => {
          this.entradaRegistrada = res;
          if (!this.entradaRegistrada.error) {        
            //this.ngOnInit();
            this.addEntradaEvent.emit('PENDIENTE');
          }
    
        });
      }

    crearSolicitudServicio(): Servicio {
        let servicio :Servicio = new Servicio();
        let solicitud:Solicitud = new Solicitud();
        solicitud.placa = this.placa;
        solicitud.cilindraje = this.cilindraje;        
        solicitud.tipo = this.cilindraje ? "moto":"carro";
        servicio = new Servicio();
        servicio.solicitudServicio = solicitud;
        console.log(servicio);       
        return servicio;
    }

    recargarListadoCobrosPendientes(){
        this.listaCobroComponente.ngOnInit();
    }

}