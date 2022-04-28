import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EncabezadoComponent } from '../encabezado/encabezado.component'
import { FooterComponent } from '../footer/footer.component';
import { OrdenesService } from '../../services/ordenes.service'
import { ClientesService } from '../../services/clientes.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-mis-compras',
  templateUrl: './mis-compras.component.html',
  styleUrls: ['./mis-compras.component.css']
})
export class MisComprasComponent implements OnInit {


  usuarioActual: any;
  ordenesCliente: any;
  usuario: any;
  ordenSeleccionada: any;

  constructor(private ordenesService: OrdenesService,
    private clientesService: ClientesService,
    private router:Router ) { }
   
  ngOnInit(): void {
    this.clientesService.obtenerUsuarioActual().subscribe(
      res=>{
        this.usuarioActual = res
        localStorage.setItem('usuario', JSON.stringify(this.usuarioActual));
      },
      err=>{
        console.log(err);
      }
    );

    this.usuarioActual= localStorage.getItem("usuario");
    this.usuarioActual = JSON.parse(this.usuarioActual);
    console.log(this.usuarioActual)
    
    console.log("usuario actual", this.usuarioActual._id)
    this.ordenesService.obtenerOrdenesPorId(this.usuarioActual._id).subscribe(
      
      res=>{
        this.ordenesCliente=res;
        console.log(res)
      },
      err=>{
        console.log(err);
      }
    );
  }

  detalleCompra(orden:any) {
    console.log('Ver los detalles de la orden: ' , orden);
    
    this.ordenSeleccionada = orden;
    localStorage.setItem('ordenActual', JSON.stringify(orden));
    this.router.navigate([`/clientes/mis-compras/detalle-orden`]);
  }
}
