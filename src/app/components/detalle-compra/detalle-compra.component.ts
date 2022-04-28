import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { OrdenesService } from 'src/app/services/ordenes.service'; 


@Component({
  selector: 'app-detalle-compra',
  templateUrl: './detalle-compra.component.html',
  styleUrls: ['./detalle-compra.component.css']
})
export class DetalleCompraComponent implements OnInit {
  @Output() onIrAtras = new EventEmitter;
  ordenActual: any;
  productos:any;
  ordenAct: any;

  constructor( private ordenesService: OrdenesService) { }

  ngOnInit(): void {
    this.ordenActual = localStorage.getItem("ordenActual");
    this.ordenActual = JSON.parse(this.ordenActual);
    console.log(this.ordenActual)
    this.productos = this.ordenActual.productos
    this.ordenesService.obtenerOrdenPorId(this.ordenActual._id).subscribe(
      res=>{
        this.ordenAct = res;
      },
      err=>{
        console.log(err);
      }
    )

    this.productos = this.ordenAct.productos;

  }

  irAtras () {
    this.onIrAtras.emit();
  }

}
