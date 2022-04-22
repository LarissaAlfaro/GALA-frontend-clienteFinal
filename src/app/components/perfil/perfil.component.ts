import { Component, OnInit } from '@angular/core';
import { faCakeCandles, faEnvelope, faRightFromBracket, faCamera } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  faEnvelope = faEnvelope;
  faCakeCandles = faCakeCandles;
  faRightFromBracket = faRightFromBracket;
  faCamera = faCamera;

  constructor( private serviceModal: NgbModal) { }

  ngOnInit(): void {
  }

  abrirModalCerrarSesion(modal:any){
    this.serviceModal.open(
      modal,
      {
        size:'xs',
        centered:true
      }
      );
  }

}
