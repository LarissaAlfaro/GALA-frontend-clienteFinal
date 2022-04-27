import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {faCircleInfo, faClock, faLocationDot} from '@fortawesome/free-solid-svg-icons';
import { EncabezadoComponent} from '../encabezado/encabezado.component'
import { FooterComponent } from '../footer/footer.component'
import { CategoriasService } from '../../services/categorias.service';
import { EmpresasService } from '../../services/empresas.service'
import { Router } from '@angular/router';

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

  constructor( private categoriasService: CategoriasService,
  private empresasService: EmpresasService,
  private router:Router,) { }

  rutaActual: string = this.router.url;
  empresas: any
  categoriaSelect: any;
  empresaSeleccionada: any;
  objetoEmpresa = {
    "banner":"",
    "logo":"",
    "nombre":"",
    "calificacion":"",
    "horaInicio":"",
    "horaFinal":"",
    "ubicacion":"",
    "descripcion":""
  }

  estrellasCalificacion: any = [];
  i:any =0;

  ngOnInit(): void {

    console.log("la ruta actual", this.rutaActual)
    const segments = this.rutaActual.split('/');
    this.categoriaSelect = decodeURI(segments[3])
    this.empresaSeleccionada = decodeURI(segments[5])


    console.log("empresa seleccionada" , this.empresaSeleccionada);
    console.log("categoria seleccionada", this.categoriaSelect)


  this.empresasService.obtenerEmpresaPorNombre(this.empresaSeleccionada).subscribe(
    res=>{
      this.objetoEmpresa = res[0]
      console.log("objeto empresa" , this.objetoEmpresa)


      for (this.i=1; this.i<=this.objetoEmpresa.calificacion; this.i++){
        console.log("llena")
        this.estrellasCalificacion.push("../../../assets/images/est-llena.svg")
      }

      for (this.i=5; this.i>this.objetoEmpresa.calificacion; this.i--){
        console.log("vacia")
        this.estrellasCalificacion.push("./../../assets/images/est-vacia.svg")
      }

      console.log(this.estrellasCalificacion)

    },
    error=>
      console.log(error)
  )

  this.empresasService.obtenerEmpresasPorCategoria(this.categoriaSelect).subscribe(
    res=>{
      this.empresas = res;
    },
    error=>{
      console.log(error)
    }
  )
}

  verProductos() {
    console.log('Ver productos de la empresa: ' , this.objetoEmpresa);
    this.router.navigate([`/clientes/categorias/${this.categoriaSelect}/empresas/${this.objetoEmpresa.nombre}/productos`]);
  }

}
