import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {

  private URL = "http://localhost:8888/empresas";
  constructor(private http: HttpClient) {}

  obtenerEmpresasPorCategoria(nombreCategoria:any):Observable<any> {
    return this.http.get(this.URL + `/obtenerEmpresasPorcategoria/${nombreCategoria}`, {});
  }

  obtenerEmpresaPorNombre(nombreEmpresa:any):Observable<any> {
    return this.http.get(this.URL + `/obtenerEmpresaPorNombre/${nombreEmpresa}`, {});
  }

}
