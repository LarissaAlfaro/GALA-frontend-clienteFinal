import { Injectable } from '@angular/core';
import { ClientesService } from "../services/clientes.service"
import {HttpInterceptor} from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(
    private clienteService: ClientesService
  ) { }

  intercept (req:any, next:any) {
    const tokenizeReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.clienteService.obtenerToken()}`
      }
    })

    return next.handle(tokenizeReq);
  }
}
