import { Component, OnInit } from '@angular/core';
import { Cobro } from './modelo/cobro.modelo';
import { Servicio } from './modelo/servicio.modelo';
import { Solicitud } from './modelo/solicitud.modelo';
import { EntradaService } from './entrada/entrada.service';
import { ListaCobroServicio } from './lista-cobro/lista-cobro.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [EntradaService, ListaCobroServicio]
})
export class AppComponent implements OnInit {
  private entradaRegistrada: Cobro = new Cobro();
  private listaCobros: Cobro[];
  private cobroSalida: Cobro = new Cobro();

  constructor(private listaCobroService: ListaCobroServicio) { 
    }

  ngOnInit() {
    this.listarCobros('PENDIENTE');     
  }

   listarCobros(estado: string) {
    this.listaCobroService.getListaCobros(estado).subscribe(data => {
      this.listaCobros = data;
    });
  }

  seleccionarCobroSalida(cobroSalida: Cobro) {
    this.cobroSalida = cobroSalida;
  }

}
