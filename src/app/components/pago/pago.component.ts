import { Component, OnInit , Output, EventEmitter} from '@angular/core';
import { FormControl, FormGroup, RequiredValidator, Validators} from '@angular/forms';
import { EncabezadoComponent } from '../encabezado/encabezado.component'
import { FooterComponent } from '../footer/footer.component';
import { Router } from '@angular/router';
import { ClientesService } from "../../services/clientes.service"
import { OrdenesService } from '../../services/ordenes.service'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'


@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent implements OnInit {
  @Output() onAtras = new EventEmitter();
  usuarioActual: any;
  productosCarrito: any;
  ubicacion: any;
  subtotal: any;
  isv: any;
  cliente: any;
  envio: any;
  datosEnviar: any = {}

  formularioPagoTarjeta = new FormGroup(
    {
      nombreCompletoTarjeta: new FormControl('', [Validators.required]),
      fechaVencimiento: new FormControl('', [Validators.required]),
      cvvCvc: new FormControl('', [Validators.required]),
      nombreTitular:  new FormControl('', [Validators.required])
    }
  );

  constructor(private router:Router,
    private clienteService:ClientesService,
    private ordenesService: OrdenesService,
    private modalService: NgbModal) { }

  ngOnInit(): void {
    this.clienteService.obtenerUsuarioActual().subscribe(
      res=>{
        this.usuarioActual = res;
      },
      err=>{
        console.log(err);
      }
    )
  }

  irAtras() {
    this.onAtras.emit();
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

  aceptar() {
    this.modalService.dismissAll();    
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
    this.productosCarrito = localStorage.getItem('productos');
    this.productosCarrito = JSON.parse(this.productosCarrito);
    
    this.ubicacion = localStorage.getItem('ubicacion');
    this.ubicacion = JSON.parse(this.ubicacion);
   
    this.subtotal = localStorage.getItem('datosFactura');
    this.subtotal = JSON.parse(this.subtotal).subtotal;

    this.isv = localStorage.getItem('datosFactura');
    this.isv = JSON.parse(this.isv).isv;

    this.envio= localStorage.getItem('datosFactura');
    this.envio= JSON.parse(this.envio).envio;



    console.log("usuario actual" ,this.usuarioActual)
    console.log("productos carrito" , this.productosCarrito)
    console.log("datos ubicacion", this.ubicacion)
    console.log("datos factura")
    console.log(this.isv)    
    console.log(this.subtotal)
    console.log(this.envio)
    console.log("datos de tarjeta a gurdar", this.formularioPagoTarjeta.value);

    this.datosEnviar.cliente = this.usuarioActual;
    this.datosEnviar.ubicacion = this.ubicacion;
    this.datosEnviar.productos = this.productosCarrito
    this.datosEnviar.subtotal = this.subtotal
    this.datosEnviar.isv = this.isv
    this.datosEnviar.envio = this.envio
    this.datosEnviar.estado = "pendiente"
    this.datosEnviar.pago = this.formularioPagoTarjeta.value

    this.ordenesService.guardarOrden(this.datosEnviar).subscribe(
      res=>{
        console.log(res);
      },
      err=>{
        console.log(err);
      }
    )

  }
}
