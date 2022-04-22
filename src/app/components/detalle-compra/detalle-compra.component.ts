import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-detalle-compra',
  templateUrl: './detalle-compra.component.html',
  styleUrls: ['./detalle-compra.component.css']
})
export class DetalleCompraComponent implements OnInit {
  @Output() onIrAtras = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  irAtras () {
    this.onIrAtras.emit();
  }

}
