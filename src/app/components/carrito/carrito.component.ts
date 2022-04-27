import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import {faCircleMinus} from '@fortawesome/free-solid-svg-icons'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { EncabezadoComponent } from '../encabezado/encabezado.component'
import { FooterComponent } from '../footer/footer.component';
import { Router } from '@angular/router';

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
  total: any = 0;
  subtotal: any = 0;
  isv: any = 0;
  i:any;
  comision: any = 0;
  index: any;
  objFactura = {}

  constructor( private router:Router) { }

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

    
    for (this.i=0; this.i<this.productosCarrito.length; this.i++){
      this.subtotal = this.subtotal + this.productosCarrito[this.i].producto.precio*this.productosCarrito[this.i].unidades;
    }
    

    for (this.i=0; this.i<this.productosCarrito.length; this.i++){
      this.isv = this.isv + this.productosCarrito[this.i].producto.isv*this.productosCarrito[this.i].unidades;
    }
 
    this.isv = parseFloat(this.isv).toFixed(2);
    this.comision = (parseFloat(this.subtotal)*0.07).toFixed(2);
    this.total = (parseFloat(this.subtotal) + parseFloat(this.comision)+parseFloat(this.isv)).toFixed(2);
    
    
  }

  checkout() {
    this.router.navigate([`/clientes/carrito/checkout/ubicacion`]);
    this.objFactura = {"subtotal": this.subtotal, "isv": this.isv, "envio":this.comision}
    localStorage.setItem('datosFactura', JSON.stringify(this.objFactura));
    console.log("obj de datos de la factura", this.objFactura)
  }

  eliminarProducto(producto:any) {
    if (localStorage.getItem('productos')==null){
      this.productosCarrito = [];
      this.areaVisible = "carrito-vacio"
    }
    else {
      this.productosCarrito = localStorage.getItem('productos');
      this.productosCarrito = JSON.parse(this.productosCarrito);
      
      for (this.i=0; this.i<this.productosCarrito.length; this.i++){
        console.log(this.productosCarrito[this.i].producto.nombre)
        if(this.productosCarrito[this.i].producto.nombre == producto.producto.nombre){
          this.productosCarrito.splice(this.i, 1);
          localStorage.setItem('productos', JSON.stringify(this.productosCarrito));

        }
      }

          this.total= 0;
          this.subtotal = 0;
          this.isv = 0;
          this.comision = 0;

          for (this.i=0; this.i<this.productosCarrito.length; this.i++){
            this.subtotal = this.subtotal + this.productosCarrito[this.i].producto.precio*this.productosCarrito[this.i].unidades;
          }
          
      
          for (this.i=0; this.i<this.productosCarrito.length; this.i++){
            this.isv = this.isv + this.productosCarrito[this.i].producto.isv*this.productosCarrito[this.i].unidades;
          }
       
          this.isv = parseFloat(this.isv).toFixed(2);
          this.comision = (parseFloat(this.subtotal)*0.07).toFixed(2);
          this.total = (parseFloat(this.subtotal) + parseFloat(this.comision)+parseFloat(this.isv)).toFixed(2);

          this.router.navigate([`/clientes/carrito`]);

   
      if (this.productosCarrito.length == 0){
        this.areaVisible == "carrito-vacio"
        console.log("esta vacío");
        this.total= 0;
        this.subtotal = 0;
        this.isv = 0;
        this.comision = 0;
      }
    }
  }
}
