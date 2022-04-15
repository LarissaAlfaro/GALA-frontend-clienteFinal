import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faHouse, faUserLarge, faBagShopping, faCartShopping } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Output() onVerOrdenesEntregadas= new EventEmitter(); 
  @Output()  onVerOrdenesPendientes= new EventEmitter(); 
  @Output()  onVerPerfil= new EventEmitter(); 
  @Output()  onVerOrdenesRecientes= new EventEmitter(); 
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
    this.onVerOrdenesEntregadas.emit();
  }

  verAreaCompras(){
    if (this.status == true) {
      this.status = false;
    }
    this.onVerOrdenesPendientes.emit();
  }

  verAreaCategorias(){
    this.onVerOrdenesRecientes.emit();
    this.status = !this.status;
  }

  verPerfil(){
    if (this.status == true) {
      this.status = false;
    }
    this.onVerPerfil.emit();

  }

}
