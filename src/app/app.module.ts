import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule}   from '@angular/http'
import {FormsModule}  from '@angular/forms'


import { AppComponent } from './app.component';
import {ListaCobroComponente} from './lista-cobro/lista-cobro.componente';
import {ServicioComponente } from './servicio/servicio.componente';
import { EntradaComponente}  from './entrada/entrada.componente';
import { SalidaComponente}  from './salida/salida.componente';


@NgModule({
  declarations: [
    AppComponent, ListaCobroComponente,ServicioComponente,EntradaComponente,SalidaComponente
  ],
  imports: [
    BrowserModule,HttpModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
