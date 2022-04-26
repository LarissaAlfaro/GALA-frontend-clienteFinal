import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  private URL = "http://localhost:8888/categorias";
  constructor(private http: HttpClient) {}

  obtenerCategorias():Observable<any> {
    return this.http.get(this.URL, {});
  }


}
