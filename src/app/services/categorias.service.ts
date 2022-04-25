import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  private URL = "http://localhost:8888/clientes";
  constructor(private http: HttpClient) {}

  


}
