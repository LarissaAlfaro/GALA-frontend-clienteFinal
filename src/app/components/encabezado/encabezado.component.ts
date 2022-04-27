import { Component, OnInit } from '@angular/core';
import { ClientesService } from "../../services/clientes.service"

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  constructor(private clienteService:ClientesService) { }
  numeroProductosCarrito: any;
  productosCarrito: any = [];
  usuarioActual={
    "_id":"",
    "nombre":"",
    "apellido":"",
    "nacimiento":"",
    "correo":"",
    "imagen":"",
    "contrasenia":"",
    "direccion":"",
    "genero":""
  };;
  

  ngOnInit(): void {
    console.log("Entró");
    this.clienteService.obtenerUsuarioActual().subscribe(
      res=>{
        this.usuarioActual = res;
        console.log("usuario acutal desde el navbar", this.usuarioActual)
      },
      err=>{
        console.log(err);
      }
    )


    if (localStorage.getItem('productos')==null){
      this.numeroProductosCarrito = 0;
    }
    else {
      this.productosCarrito = localStorage.getItem('productos');
      this.productosCarrito = JSON.parse(this.productosCarrito);
      this.numeroProductosCarrito = this.productosCarrito.length;
    }


    


  }

}
