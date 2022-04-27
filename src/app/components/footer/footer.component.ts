import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faHouse, faUserLarge, faBagShopping, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Output() onVerCategorias= new EventEmitter(); 
  @Output()  onVerCompras= new EventEmitter(); 
  @Output()  onVerPerfil= new EventEmitter(); 
  @Output()  onVerCarrito= new EventEmitter(); 
  faHouse = faHouse;
  faUserLarge = faUserLarge;
  faBagShopping = faBagShopping;
  faCartShopping = faCartShopping;

  constructor(private router:Router) {}

  areaVisible:string = "";
  status:boolean = true;
  seccionCategorias = true;
  seccionVerCarrito = false;
  seccionAreaCompras = false;
  seccionAreaPerfil = false;

  ngOnInit(): void {
  
  }

  verAreaCarrito(){
    this.seccionCategorias = false;
    this.seccionVerCarrito = true;
    this.seccionAreaCompras = false;
    this.seccionAreaPerfil = false; 
    this.router.navigate([`/clientes/carrito`]);
  }

  verAreaCompras(){
    this.seccionCategorias = false;
    this.seccionVerCarrito = false;
    this.seccionAreaCompras = true;
    this.seccionAreaPerfil = false; 
    //this.router.navigate([`/clientes/ordenes`]);
  }

  verAreaCategorias(){
    this.seccionCategorias = true;
    this.seccionVerCarrito = false;
    this.seccionAreaCompras = false;
    this.seccionAreaPerfil = false; 
    this.router.navigate([`/clientes/categorias`]);
  }

  verAreaPerfil(){
    this.seccionCategorias = false;
    this.seccionVerCarrito = false;
    this.seccionAreaCompras = false;
    this.seccionAreaPerfil = true; 
    this.router.navigate([`/clientes/perfil`]);
  }

}
