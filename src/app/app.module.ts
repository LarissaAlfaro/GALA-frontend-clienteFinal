import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { InicioSesionComponent } from './components/inicio-sesion/inicio-sesion.component';
import { RegistroClientesComponent } from './components/registro-clientes/registro-clientes.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { EmpresasComponent } from './components/empresas/empresas.component'
import { CommonModule } from '@angular/common';
import { DetalleEmpresaComponent } from './components/detalle-empresa/detalle-empresa.component';
import { ProductosComponent } from './components/productos/productos.component';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { CarritoComponent } from './components/carrito/carrito.component';
import { UbicacionComponent } from './components/ubicacion/ubicacion.component';
import { PagoComponent } from './components/pago/pago.component';
import { MisComprasComponent } from './components/mis-compras/mis-compras.component';
import { DetalleCompraComponent } from './components/detalle-compra/detalle-compra.component';
import { PerfilComponent } from './components/perfil/perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    EncabezadoComponent,
    InicioSesionComponent,
    RegistroClientesComponent,
    FooterComponent,
    CategoriasComponent,
    EmpresasComponent,
    DetalleEmpresaComponent,
    ProductosComponent,
    CarritoComponent,
    UbicacionComponent,
    PagoComponent,
    MisComprasComponent,
    DetalleCompraComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule, 
    NgxUsefulSwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
