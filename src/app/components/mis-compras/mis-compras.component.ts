import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mis-compras',
  templateUrl: './mis-compras.component.html',
  styleUrls: ['./mis-compras.component.css']
})
export class MisComprasComponent implements OnInit {
  @Output() onVerDetalleCompra = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }


  detalleCompra() {
    this.onVerDetalleCompra.emit();
  }

}
