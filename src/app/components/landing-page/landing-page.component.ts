import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  @Output() onInicioSesion = new EventEmitter();
  @Output() onRegistrarse = new EventEmitter();


  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  verInicioSesion() {
    this.onInicioSesion.emit();
    this.modalService.dismissAll();
  }

  verRegistroClientes() {
    this.onRegistrarse.emit();
    this.modalService.dismissAll();
  }

  abrirModal(modal:any) {
    this.modalService.open(
      modal,
      {
        size: 'xl',
        centered:true
      }
    );
  }
}
