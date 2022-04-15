import { Component, OnInit, Output, ViewChild, ElementRef, EventEmitter} from '@angular/core';
import { FormControl, FormGroup, RequiredValidator, Validators} from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-registro-clientes',
  templateUrl: './registro-clientes.component.html',
  styleUrls: ['./registro-clientes.component.css']
})

export class RegistroClientesComponent implements OnInit {
  constructor(private modalService: NgbModal) { }

  @Output() onVerCategorias = new EventEmitter;
  nombreInvalido = false;
  nombreValido = false;
  confirmarContraseniaError = false;

  ngOnInit(): void {
      this.formularioRegistro.get('inputArchivo')?.setValue("");

  }

  formularioRegistro = new FormGroup(
    {
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required]),
      nacimiento: new FormControl('', [Validators.required]),
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

  get correo(){
    return this.formularioRegistro.get('correo');
  }

  get contrasenia(){
    return this.formularioRegistro.get('contrasenia');
  }

  get confirmContrasenia(){
    return this.formularioRegistro.get('confirmContrasenia');
  }

  get inputArchivo(){
    return this.formularioRegistro.get('inputArchivo');
  }

  archivoFileChangeEvent(event:any): void {

    let archivoCapturado = event.target.files[0];

    this.formularioRegistro.get('inputArchivo')?.setValue(archivoCapturado.name);
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

  verCategorias() {
    this.onVerCategorias.emit();
    this.modalService.dismissAll();
  }
}






  


