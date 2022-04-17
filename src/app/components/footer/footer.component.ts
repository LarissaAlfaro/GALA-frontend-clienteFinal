import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faHouse, faUserLarge, faBagShopping, faCartShopping } from '@fortawesome/free-solid-svg-icons';

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

  areaVisible:string = "";
  status:boolean = true;

  ngOnInit(): void {
  
  }

  verAreaCarrito(){
    if (this.status == true) {
      this.status = false;
    }
    this.onVerCarrito.emit();
  }

  verAreaCompras(){
    if (this.status == true) {
      this.status = false;
    }
    this.onVerCompras.emit();
  }

  verAreaCategorias(){
    this.onVerCategorias.emit();
    this.status = !this.status;
  }

  verAreaPerfil(){
    if (this.status == true) {
      this.status = false;
    }
    this.onVerPerfil.emit();

  }

}
