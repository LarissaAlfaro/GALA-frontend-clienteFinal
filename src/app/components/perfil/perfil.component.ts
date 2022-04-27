import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faCakeCandles, faEnvelope, faRightFromBracket, faCamera } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ClientesService } from '../../services/clientes.service';
import { SubirImagenService } from 'src/app/services/subir-imagen.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  @Output() onActualizar = new EventEmitter();

  faEnvelope = faEnvelope;
  faCakeCandles = faCakeCandles;
  faRightFromBracket = faRightFromBracket;
  faCamera = faCamera;
  usuarioActual={
    "_id":"",
    "nombre":"",
    "apellido":"",
    "nacimiento":"",
    "correo":"",
    "imagen":"",
    "contrasenia":"",
    "direccion":"",
    "genero":""
  };
  subiendoImagen=false;
  urlImagen:any;

  constructor( public serviceModal: NgbModal,
    public clientesService : ClientesService, private subirImagenService:SubirImagenService
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


  archivoFileChangeEventImagen(event:any): void {
    let archivoCapturado = event.target.files;
    this.subiendoImagen=true;

    let formData = new FormData();
    for (var i = 0; i < archivoCapturado.length; i++) {
      formData.append("image", archivoCapturado[i], archivoCapturado[i].name);
    }

    this.subirImagenService.subirImagen(formData).subscribe(
      res=>{
         this.subiendoImagen = false;
         this.urlImagen = res.data;
         console.log(this.urlImagen)
         this.actualizarCliente();
        },
      error => console.log(error)
    )
  }

  actualizarCliente(){
    let cliente ={
      "nombre": this.usuarioActual.nombre,
      "apellido": this.usuarioActual.apellido,
      "contrasenia": this.usuarioActual.contrasenia,
      "correo": this.usuarioActual.correo,
      "direccion": this.usuarioActual.direccion,
      "genero": this.usuarioActual.genero,
      "imagen": this.urlImagen,
      "nacimiento": this.usuarioActual.nacimiento
    }

    this.clientesService.actualizarUsuario(this.usuarioActual._id, cliente).subscribe(
      res=>{
        console.log(res);
        this.onActualizar.emit();
        this.ngOnInit();
      }, error => console.log(error)
    )

  }

}
