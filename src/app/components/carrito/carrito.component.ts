import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import {faCircleMinus} from '@fortawesome/free-solid-svg-icons'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { EncabezadoComponent } from '../encabezado/encabezado.component'
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  @Output() onCheckout = new EventEmitter();
  faXmark = faXmark;
  faCircleMinus = faCircleMinus;
  faCirclePlus = faCirclePlus;
  productosCarrito: any = [];
  areaVisible = " ";
  total: any;
  subtotal: any;
  isv: any;
  i:any;
  comision: any;

  constructor() { }

  ngOnInit(): void {
    if (localStorage.getItem('productos')==null){
      this.productosCarrito = [];
      this.areaVisible = "carrito-vacio"
    }
    else {
      this.productosCarrito = localStorage.getItem('productos');
      this.productosCarrito = JSON.parse(this.productosCarrito);
      this.areaVisible = "carrito-productos"
    }

    
    for (this.i=0; this.i<=this.productosCarrito.length; this.i++){
      this.subtotal += this.i.precio;
    }

    for (this.i=0; this.i<=this.productosCarrito.length; this.i++){
      this.isv += this.i.isv;
    }

  
    this.total = this.subtotal + this.isv
    this.comision = this.total*0.07

  }

  checkout() {
    this.onCheckout.emit();
  }

}
