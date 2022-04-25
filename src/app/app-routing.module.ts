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
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
