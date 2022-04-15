import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {
  @Output() onRegistrarse = new EventEmitter();
  @Output() onIniciarSesion = new EventEmitter();
 
  constructor() { }

  ngOnInit(): void {
  }

  registrarse(){
    this.onRegistrarse.emit();
  }

  iniciarSesion(){
    this.onIniciarSesion.emit();
  }
   
}
