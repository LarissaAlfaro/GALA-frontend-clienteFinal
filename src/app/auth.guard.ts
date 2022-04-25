import { Injectable } from '@angular/core';
import { CanActivate} from '@angular/router';
import { ClientesService } from './services/clientes.service'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(
    private clientesService: ClientesService,
    private router: Router   
  ){


  }

  canActivate(): boolean {
    if (this.clientesService.loggedIn()){
      return true;
    }

    this.router.navigate(["/clientes/inicio-sesion"])
    return false;

  }
}
