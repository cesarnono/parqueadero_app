import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule}   from '@angular/http'


import { AppComponent } from './app.component';
import {ListaCobroComponente} from './lista-cobro/lista-cobro.componente';


@NgModule({
  declarations: [
    AppComponent, ListaCobroComponente
  ],
  imports: [
    BrowserModule,HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
