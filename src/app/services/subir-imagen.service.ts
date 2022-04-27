import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubirImagenService {

  constructor(private httpClient:HttpClient) { }

  subirImagen(image:any):Observable<any>{
    return this.httpClient.post('http://localhost:8888/upload-images',image);
  }
}
