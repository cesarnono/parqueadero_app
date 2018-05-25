import { Component,OnInit,Input,Output,EventEmitter} from '@angular/core';
import {ListaCobroServicio} from './lista-cobro.service'
import {Cobro} from '../modelo/cobro.modelo'
@Component(
    {
      selector:'lista-cobro',
      templateUrl:'./lista-cobro.componente.html' ,
      providers: [ListaCobroServicio] 
    }
)
export class ListaCobroComponente implements OnInit{
  @Input() listaCobros: Cobro[];  
  //private cobroSalida: Cobro = new Cobro();

  @Output() selectedCobroEmitter = new EventEmitter<Cobro>();

   constructor(private listaCobroService:ListaCobroServicio){
   }

   ngOnInit(){
      // this.listarCobros('PENDIENTE');
   }
   
   seleccionarCobroSalida(cobroSalida: Cobro) {
    //this.cobroSalida = cobroSalida;
    this.selectedCobroEmitter.emit(cobroSalida);
  }

}