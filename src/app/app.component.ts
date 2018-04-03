import { Component, OnInit } from '@angular/core';
import { Cobro } from './modelo/cobro.modelo';
import { Servicio } from './modelo/servicio.modelo';
import { Solicitud } from './modelo/solicitud.modelo';
import { EntradaService } from './entrada/entrada.service';
import { ListaCobroServicio } from './lista-cobro/lista-cobro.service';
import { SalidaService } from './salida/salida.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [EntradaService, ListaCobroServicio,SalidaService]
})
export class AppComponent implements OnInit {
  private entradaRegistrada: Cobro = new Cobro();
  private placa: string;
  private cilindraje: string;
  private listaCobros: Cobro[];
  private cobroSalida: Cobro = new Cobro();


  constructor(private entradaService: EntradaService,
    private listaCobroService: ListaCobroServicio,
    private salidaService: SalidaService) { }

  ngOnInit() {
    this.listarCobros('PENDIENTE');
  }

  registrarEntrada() {
    let servicio: Servicio = this.crearSolicitudServicio();
    this.entradaService.registrarEntrada(servicio).subscribe(res => {
      this.entradaRegistrada = res;
      if (!this.entradaRegistrada.error) {
        this.placa = "";
        this.cilindraje = "";
        this.ngOnInit();
      }

    });
  }

  crearSolicitudServicio(): Servicio {
    let servicio: Servicio = new Servicio();
    let solicitud: Solicitud = new Solicitud();
    solicitud.placa = this.placa;
    solicitud.cilindraje = this.cilindraje;
    solicitud.tipo = this.cilindraje ? "moto" : "carro";
    servicio = new Servicio();
    servicio.solicitudServicio = solicitud;
    console.log(servicio);
    return servicio;
  }

  listarCobros(estado: string) {
    this.listaCobroService.getListaCobros(estado).subscribe(data => {
      this.listaCobros = data;
    });
  }

  seleccionarCobroSalida(cobroSalida: Cobro) {
    this.cobroSalida = cobroSalida;
  }

  registrarSalida() {
      if(confirm('Esta seguro de registrar la salidad para vehiculo con placa: '+this.cobroSalida.placa+'?')){
        this.salidaService.registrarSalida(this.cobroSalida.id).subscribe(data =>{
          this.cobroSalida = data;
          this.ngOnInit();
        });
      }
       
  }

}
