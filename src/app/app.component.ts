import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Gala-Frontend-Clientes';
  areaVisible = "landing-page";
  categoriaActual: any;


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

  verEmpresas($event:any) {
    //this.areaVisible = "seccion-empresas";
    this.categoriaActual=$event;
    console.log("categoria actual desde el componente padre" , this.categoriaActual)
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

  verUbicacion() {
    this.areaVisible = "seccion-ubicacion";
  }

  verPago() {
    this.areaVisible = "seccion-pago";
  }

  atrasUbicacion () {
    this.areaVisible = "seccion-carrito";
  }

  atrasPago() {
    this.areaVisible = "seccion-ubicacion"
  }

  verCompras() {
    this.areaVisible = "seccion-compras"; 
  }

  verDetalleCompra() {
    this.areaVisible = "detalle-compra";
  }  

  verPerfil() {
    this.areaVisible = "seccion-perfil";
  }

}
