import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {faCircleInfo, faClock, faLocationDot} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-detalle-empresa',
  templateUrl: './detalle-empresa.component.html',
  styleUrls: ['./detalle-empresa.component.css']
})
export class DetalleEmpresaComponent implements OnInit {
  @Output() onVerProductos = new EventEmitter();
  faCircleInfo = faCircleInfo;
  faClock = faClock;
  faLocationDot = faLocationDot;

  constructor() { }

  ngOnInit(): void {
  }

  verProductos() {
    this.onVerProductos.emit();
  }

}
