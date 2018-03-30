import { Component,OnInit} from '@angular/core';
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
  private listaCobros: Cobro[];
  

   constructor(private listaCobroService:ListaCobroServicio){

   }

   ngOnInit(){
       this.listarCobros('PENDIENTE');
   }

   listarCobros(estado:string){
      this.listaCobroService.getListaCobros(estado).subscribe(data =>{
         this.listaCobros = data;
      });
   }
}