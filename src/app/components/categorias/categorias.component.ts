import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FooterComponent} from "../footer/footer.component"
import { EncabezadoComponent } from "../encabezado/encabezado.component"
import { CategoriasService } from "../../services/categorias.service"
import { ClientesService } from "../../services/clientes.service"
import { Router } from '@angular/router';


@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
  @Output() onVerEmpresas = new EventEmitter();

  constructor(
    private categoriasService:CategoriasService,
    private clienteService:ClientesService, 
    private router:Router
    ) { }

  categorias:any = []
  usuarioActual:any;
  categoriaSeleccionada: any;

  ngOnInit(): void {
    this.categoriasService.obtenerCategorias().subscribe(
      res=>{
        this.categorias = res;
        console.log("Categorias:", this.categorias);
        
        this.clienteService.obtenerUsuarioActual().subscribe(
          res=>{
            this.usuarioActual = res;
          },
          err=>{
            console.log(err);
          }
        )
      },
      error=>{
        console.log(error)
      }
    )
  }

  verEmpresas(categoria: any) {

    this.onVerEmpresas.emit(categoria);

    console.log('Ver empresas de la categoria: ' , categoria);
    
    this.categoriaSeleccionada = categoria;
    this.router.navigate([`/clientes/categorias/${categoria.nombre}`]);
  }
}
