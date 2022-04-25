import { Component, OnInit, Output, ViewChild, ElementRef, EventEmitter} from '@angular/core';
import { FormControl, FormGroup, RequiredValidator, Validators, FormsModule} from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import {ClientesService} from '../../services/clientes.service'
import {Router} from '@angular/router'
import { textChangeRangeIsUnchanged } from 'typescript';

@Component({
  selector: 'app-registro-clientes',
  templateUrl: './registro-clientes.component.html',
  styleUrls: ['./registro-clientes.component.css']
})

export class RegistroClientesComponent implements OnInit {
  constructor(
    private modalService: NgbModal, 
    private clienteService: ClientesService,
    private router: Router
  ) { }

  //@Output() onVerCategorias = new EventEmitter;
  @ViewChild("modalResultadoRegistro") private refModal: any;

  
  nombreInvalido = false;
  nombreValido = false;
  confirmarContraseniaError = false;
  rutaLogoModal = "";
  textoModal = "";
  rutaNavegacion = "";

  ngOnInit(): void {
      this.formularioRegistro.get('inputArchivo')?.setValue("");

  }

  formularioRegistro = new FormGroup(
    {
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required]),
      nacimiento: new FormControl('', [Validators.required]),
      direccion: new FormControl('', [Validators.required]),
      genero: new FormControl('', [Validators.required]),
      correo: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      contrasenia: new FormControl('',[Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$')]),
      confirmContrasenia : new FormControl('', [Validators.required]),
    }
  );

  onSubmitFormulario(){
    if( this.formularioRegistro.invalid ) return;
    console.log(this.formularioRegistro);
  }

  get nombre(){
    return this.formularioRegistro.get('nombre');
  }

  get apellido(){
    return this.formularioRegistro.get('apellido');
  }
  
  get nacimiento(){
    return this.formularioRegistro.get('nacimiento');
  }

  get direccion(){
    return this.formularioRegistro.get('direccion');
  }

  get genero(){
    return this.formularioRegistro.get('genero');
  }

  get correo(){
    return this.formularioRegistro.get('correo');
  }

  get contrasenia(){
    return this.formularioRegistro.get('contrasenia');
  }

  get confirmContrasenia(){
    return this.formularioRegistro.get('confirmContrasenia');
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

  aceptar() {
    //this.onaceptar.emit();
    this.modalService.dismissAll();
    if (this.rutaNavegacion!="") {
      this.router.navigate([this.rutaNavegacion]);
    }
  }

  registrarse() {
    console.log(this.formularioRegistro.value);////////////i//////////////////
    this.clienteService.registro(this.formularioRegistro.value).subscribe(
      res => {
        console.log(res)////////////////////impresion///////////////////
        localStorage.setItem('token', res.token);
        this.textoModal = "Se ha registrado exitósamente."
        this.rutaLogoModal = "../../../assets/images/check_circle_black_24dp 1.svg"
        this.rutaNavegacion = '/clientes/categorias'
        this.abrirModal(this.refModal);
       //
      },
      err => {
        console.log("el error", err.error)////////////////////impresion///////////////////
        if (err.error.errCode == 11000){
          this.textoModal = `${err.error.message}`
          this.rutaLogoModal = "../../../assets/images/error_black_24dp 1.svg"
          this.rutaNavegacion = ""
          this.abrirModal(this.refModal)
        }

        else {
          this.textoModal = "Ha ocurrido un error al registrarte, inténtalo de nuevo."
          this.rutaLogoModal = "../../../assets/images/error_black_24dp 1.svg"
          this.rutaNavegacion = "";
          this.abrirModal(this.refModal)
        }
      }
    )
  }

}






  


