import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import { EncabezadoComponent } from '../encabezado/encabezado.component'
import { FooterComponent } from '../footer/footer.component';
import { Router } from '@angular/router';
import { CategoriasService } from '../../services/categorias.service';
import { EmpresasService } from '../../services/empresas.service'
@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {
  @Output() onVerDetalleEmpresa = new EventEmitter();
  @Input() categoriaActual: any;


  constructor(private router:Router,
    private categoriasService: CategoriasService,
    private empresasService: EmpresasService) { }
    categorias:any;
    rutaActual: string = this.router.url;
    empresas: any
    categoriaSelect: any;
    empresaSeleccionada: any;

  ngOnInit(): void {
  
  console.log("la ruta actual", this.rutaActual)
  const segments = this.rutaActual.split('/');
  this.categoriaSelect = decodeURI(segments[3]) 
  
  console.log("ultimo segmento", this.categoriaSelect);

    this.categoriasService.obtenerCategorias().subscribe(
      res=>{
        this.categorias = res;
      },
      error=>{
        console.log(error);
      }
    )

    this.empresasService.obtenerEmpresasPorCategoria(decodeURI(this.categoriaSelect)).subscribe(
      res=>{
        console.log("respuesta, buscar empresas por categoria", res)
        this.empresas = res;
      },
      error=>{
        console.log(error)
      }
    )
  }

  verDetalleEmpresa(empresa:any) {
    console.log('La empresa a ver: ' , empresa);
    console.log(this.categoriaSelect)
    this.empresaSeleccionada = empresa;
    this.router.navigate([`/clientes/categorias/${this.categoriaSelect}/empresas/${empresa.nombre}`]);
  }
}
