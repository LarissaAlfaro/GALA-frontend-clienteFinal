import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class OrdenesService {


  private URL = "http://localhost:8888/ordenes";
  constructor(private http: HttpClient) { }


  guardarOrden(cliente:any):Observable<any> {
    return this.http.post(this.URL, cliente);
  }

  obtenerOrdenesPorId(id:any):Observable<any> {
    return this.http.get(this.URL + `/cliente/${id}`,{});
  }

  obtenerOrdenPorId(id:any):Observable<any> {
    return this.http.get(this.URL + `/${id}`,{});
  }

}

