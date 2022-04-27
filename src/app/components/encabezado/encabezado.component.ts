import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  constructor() { }
  numeroProductosCarrito: any;
  productosCarrito: any = [];
  

  ngOnInit(): void {
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
