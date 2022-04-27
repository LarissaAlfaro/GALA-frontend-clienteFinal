import { Component, OnInit } from '@angular/core';
import { faCakeCandles, faEnvelope, faRightFromBracket, faCamera } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ClientesService } from '../../services/clientes.service'
import { EncabezadoComponent } from '../encabezado/encabezado.component'
import { FooterComponent } from '../footer/footer.component';

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
  usuarioActual: any;

  constructor( public serviceModal: NgbModal,
    public clientesService : ClientesService
    ) { }

  ngOnInit(): void {

    this.clientesService.obtenerUsuarioActual().subscribe(
      res=>{
        this.usuarioActual = res;
        console.log("usuario acutal desde el perfil", this.usuarioActual)
      },
      err=>{
        console.log(err);
      }
    )
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
