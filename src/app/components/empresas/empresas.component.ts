import { Component, OnInit, Output, EventEmitter} from '@angular/core';

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
