import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { SwiperOptions } from 'swiper';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EncabezadoComponent } from '../encabezado/encabezado.component'
import { FooterComponent } from '../footer/footer.component';
import { CategoriasService } from '../../services/categorias.service';
import { EmpresasService } from '../../services/empresas.service'
import { ProductosService } from '../../services/productos.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})

export class ProductosComponent implements OnInit {

  config: SwiperOptions = {
    pagination: { 
      el: '.swiper-pagination', 
      clickable: true 
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 30
  };  

  constructor(private router:Router,
  private modalService: NgbModal,
  private productosService: ProductosService) { }
  rutaActual: string = this.router.url;
  categoriaSelect: any;
  empresaSeleccionada: any;
  productosEmpresa: any;
  productoAComprar: any;
  unidadesProducto: Number = 1;
  productosCarrito:any = [];
  adquisicionActual: any;

  ngOnInit(): void {
    console.log("la ruta actual", this.rutaActual)
    const segments = this.rutaActual.split('/');
    this.categoriaSelect = decodeURI(segments[3]);
    this.empresaSeleccionada = decodeURI(segments[5]);


    console.log("ultimo segmento", this.categoriaSelect);
    
    console.log("categoria actual", this.categoriaSelect);
    console.log("empresa actual", this.empresaSeleccionada);

    this.productosService.obtenerProductosPorNombreEmpresa(this.empresaSeleccionada).subscribe(
      res=>{
        this.productosEmpresa = res
        console.log("productos empresa" , this.productosEmpresa)
      },
      error=>
        console.log(error)
    )
  }

  regresarVerEmpresa() {
    //this.onRegresarEmpresa.emit();
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

 abrirModalAgregarProducto(modal:any, producto:any) {
   this.unidadesProducto = 1;
    this.productoAComprar = producto;
    this.modalService.open(
      modal,
      {
        size: 'xl',
        centered:true
      }
    );
  }

  agregarProductoCarrito() {
    console.log("El producto que se quire agregar", this.productoAComprar);
    console.log("Las unidades del producto a comprar", this.unidadesProducto);

    this.adquisicionActual = {"producto": this.productoAComprar, "unidades":this.unidadesProducto}

    if (localStorage.getItem('productos')==null){
      localStorage.setItem('productos', JSON.stringify([]));
    } else {
      this.productosCarrito = localStorage.getItem('productos');
      this.productosCarrito = JSON.parse(this.productosCarrito);
      this.productosCarrito.push(this.adquisicionActual);
      localStorage.setItem('productos', JSON.stringify(this.productosCarrito));
    }
  }
 

  cerrarModales() {
    this.modalService.dismissAll();
  }
}
