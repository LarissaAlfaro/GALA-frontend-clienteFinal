import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { SwiperOptions } from 'swiper';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})

export class ProductosComponent implements OnInit {
@Output() onRegresarEmpresa = new EventEmitter();

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

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  regresarVerEmpresa() {
    this.onRegresarEmpresa.emit();
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

}
