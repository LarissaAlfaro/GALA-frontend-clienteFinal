import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Gala-Frontend-Clientes';
  areaVisible = "landing-page";

  verAreaInicioSesion(){
    this.areaVisible = 'inicio-sesion';
  }

  verRegistro() {
    this.areaVisible = "registro-clientes";
  }

  iniciarSesion() {
  }

  verCategorias() {
    this.areaVisible = "seccion-categorias";
  }

  verEmpresas() {
    this.areaVisible = "seccion-empresas";
  }

  verDetalleEmpresa() {
    this.areaVisible = "seccion-detalle-empresa";
  }

  verProductos() {
    this.areaVisible = "seccion-productos";
  }

  verCarrito() {
    this.areaVisible = "seccion-carrito";
  }
  
}
