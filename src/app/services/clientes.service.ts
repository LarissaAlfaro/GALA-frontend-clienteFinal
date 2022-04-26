import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private URL = "http://localhost:8888/clientes";

  constructor(
    private http: HttpClient,
    private router: Router 
  ) {}


  registro(usuario:any) {
    usuario.imagen = "https://res.cloudinary.com/galadelivery/image/upload/v1650945342/Images/imagenPorDefecto_cufrlh.png";
    return this.http.post<any>(this.URL + '/registro', usuario);
  }

  obtenerUsuarioActual(){
    return this.http.get<any>(this.URL + '/obtenerUsuarioAutenticado');
  }

  inicioSesion(usuario:any) {
    return this.http.post<any>(this.URL + '/inicio-sesion', usuario);
  }

  loggedIn(): Boolean {
    return !!localStorage.getItem('token')
  }

  obtenerToken() {
    return localStorage.getItem('token');
  }

  cerrarSesion() {
    localStorage.removeItem("token");
    this.router.navigate(["clientes/inicio-sesion"])
  }

}
