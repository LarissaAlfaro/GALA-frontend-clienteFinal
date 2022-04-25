import { Component, OnInit, EventEmitter, Output, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, RequiredValidator, Validators, FormsModule} from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import {ClientesService} from '../../services/clientes.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {
  @Output() onRegistrarse = new EventEmitter();
  @Output() onIniciarSesion = new EventEmitter();
 
  constructor(
    private modalService: NgbModal, 
    private clienteService: ClientesService,
    private router: Router
  ) { }


  @ViewChild("modalResultadoInicioSesion") private refModal: any;
  rutaLogoModal = "";
  textoModal = "";
  rutaNavegacion = "";


  ngOnInit(): void {
  }


  formularioInicioSesion = new FormGroup(
    {
      correo: new FormControl('', [Validators.required]),
      contrasenia: new FormControl('', [Validators.required])
    }
  );


  get correo(){
    return this.formularioInicioSesion.get('correo');
  }

  get contrasenia(){
    return this.formularioInicioSesion.get('contrasenia');
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

  registrarse(){
    //this.onRegistrarse.emit();
    this.router.navigate(["/clientes/registro"]);
  }

  aceptar() {
    //this.onaceptar.emit();
    this.modalService.dismissAll();
  }

  iniciarSesion(){
    //this.onIniciarSesion.emit();
    this.clienteService.inicioSesion(this.formularioInicioSesion.value).subscribe(
      res => {
        localStorage.setItem('token', res.token);
        console.log(res)
        this.router.navigate(["/clientes/categorias"]);
       
      },
      err => {
        console.log("el error", err)////////////////////impresion///////////////////
        this.textoModal = `${err.error.message}`
        this.rutaLogoModal = "../../../assets/images/error_black_24dp 1.svg"
        this.abrirModal(this.refModal)
      }
    )
  }
  

}
