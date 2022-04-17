import { Component, OnInit } from '@angular/core';
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import {faCircleMinus} from '@fortawesome/free-solid-svg-icons'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  faXmark = faXmark;
  faCircleMinus = faCircleMinus;
  faCirclePlus = faCirclePlus;

  constructor() { }

  ngOnInit(): void {
  }

}
