import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})

export class ProductosService {

  private URL = "http://localhost:8888/productos";
  constructor(private http: HttpClient) {}

  obtenerProductosPorNombreEmpresa(nombreEmpresa:any):Observable<any> {
    return this.http.get(this.URL + `/obtenerProductosPorEmpresa/${nombreEmpresa}`, {});
  }

}
