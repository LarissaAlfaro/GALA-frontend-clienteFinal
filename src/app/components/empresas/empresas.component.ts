import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { EncabezadoComponent } from '../encabezado/encabezado.component'
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {
  @Output() onVerDetalleEmpresa = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  verDetalleEmpresa(id:number) {
    console.log('Ver empresa con id: ' , id);
    this.onVerDetalleEmpresa.emit();
  }
}
