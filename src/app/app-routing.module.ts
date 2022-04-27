import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from "./components/landing-page/landing-page.component"
import { CategoriasComponent } from "./components/categorias/categorias.component"
import { InicioSesionComponent } from "./components/inicio-sesion/inicio-sesion.component"
import { RegistroClientesComponent } from "./components/registro-clientes/registro-clientes.component"
import {FooterComponent} from "./components/footer/footer.component"
import { EncabezadoComponent } from "./components/encabezado/encabezado.component"
import { PerfilComponent } from "./components/perfil/perfil.component"
import { AuthGuard } from './auth.guard'
import { EmpresasComponent } from './components/empresas/empresas.component';
import { UrlSegment } from '@angular/router';
import { DetalleEmpresaComponent } from './components/detalle-empresa/detalle-empresa.component';
import { ProductosComponent } from './components/productos/productos.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { UbicacionComponent } from './components/ubicacion/ubicacion.component';
import { PagoComponent } from './components/pago/pago.component';

const nombreCategoriaRegex = '[A-Z,a-z]+'
const rutaSeccionCategorias = 'clientes/categorias'

const regexMatcherCategorias = (url: UrlSegment[]) => {
  return url.length === 3 && url[2].path.match(nombreCategoriaRegex)
    ? { consumed: url }
    : null;
};

const regexMatcherEmpresas = (url: UrlSegment[]) => {
  return url.length === 5 && url[4].path.match(nombreCategoriaRegex)
    ? { consumed: url }
    : null;
};

const regexMatcherProductosEmpresa = (url: UrlSegment[]) => {
  return url.length === 6 && url[4].path.match(nombreCategoriaRegex)
    ? { consumed: url }
    : null;
};



const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'clientes/categorias',
    component: CategoriasComponent, 
    canActivate: [AuthGuard]
  },
  {
    path: 'clientes/registro',
    component: RegistroClientesComponent
  },
  {
    path: 'clientes/inicio-sesion',
    component: InicioSesionComponent
  },
  {
    path: 'clientes/perfil',
    component: PerfilComponent
  },
  {
    path: 'clientes/carrito',
    component: CarritoComponent
  },
  {
    path: 'clientes/carrito/checkout/ubicacion',
    component: UbicacionComponent
  },
  {
    matcher: regexMatcherCategorias,
    component: EmpresasComponent
  },
  {
    matcher: regexMatcherEmpresas,
    component: DetalleEmpresaComponent
  },
  {
    matcher: regexMatcherProductosEmpresa,
    component: ProductosComponent
  }, 
  {
    path: 'clientes/carrito/checkout/pago',
    component: PagoComponent
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
