import { Component, OnInit , Output, EventEmitter} from '@angular/core';
import { FormControl, FormGroup, RequiredValidator, Validators} from '@angular/forms';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent implements OnInit {
  @Output() onAtras = new EventEmitter();

  formularioPagoTarjeta = new FormGroup(
    {
      nombreCompletoTarjeta: new FormControl('', [Validators.required]),
      fechaVencimiento: new FormControl('', [Validators.required]),
      cvvCvc: new FormControl('', [Validators.required]),
      nombreTitular:  new FormControl('', [Validators.required])
    }
  );

  constructor() { }

  ngOnInit(): void {
  }

  irAtras() {
    this.onAtras.emit();
  }

  get nombreCompletoTarjeta(){
    return this.formularioPagoTarjeta.get('nombrePagoTarjeta');
  }

  get fechaVencimiento(){
    return this.formularioPagoTarjeta.get('fechaVencimiento');
  }

  get cvvCvc(){
    return this.formularioPagoTarjeta.get('cvvCvc');
  }

  get nombreTitular(){
    return this.formularioPagoTarjeta.get('nombreTitular');
  }

  enviarDatos() {
    if( this.formularioPagoTarjeta.invalid ) return;

    console.log(this.formularioPagoTarjeta);
  }

}
