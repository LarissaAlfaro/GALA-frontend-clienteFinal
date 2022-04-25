import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FooterComponent} from "../footer/footer.component"
import { EncabezadoComponent } from "../encabezado/encabezado.component"


@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
  @Output() onVerEmpresas = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  verEmpresas(id:number) {
    console.log('Ver empresas con categoría con id: ' , id);
    this.onVerEmpresas.emit();
  }
}
