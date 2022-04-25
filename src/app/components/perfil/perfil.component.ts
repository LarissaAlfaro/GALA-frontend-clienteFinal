import { Component, OnInit } from '@angular/core';
import { faCakeCandles, faEnvelope, faRightFromBracket, faCamera } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ClientesService } from '../../services/clientes.service'
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

  constructor( public serviceModal: NgbModal,
    public clientesService : ClientesService
    ) { }

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
