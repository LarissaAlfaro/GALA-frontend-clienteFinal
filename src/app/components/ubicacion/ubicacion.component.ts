import { Component, AfterViewInit, Output, EventEmitter } from '@angular/core';
import * as L from 'leaflet';
import { FormControl, FormGroup, RequiredValidator, Validators} from '@angular/forms';
import { EncabezadoComponent } from '../encabezado/encabezado.component'
import { FooterComponent } from '../footer/footer.component';
import {Router} from '@angular/router'

@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.component.html',
  styleUrls: ['./ubicacion.component.css']
})

export class UbicacionComponent implements AfterViewInit {
  @Output() onLatLong = new EventEmitter();
  @Output() onVerPago = new EventEmitter();
  @Output() onAtras = new EventEmitter();

  map: any;
  datosUbicacion = {
    latitud: 14.543867,
    longitud: -86.8395272
  }
 
  initMap(): void {

    this.map = L.map('map', {
      center: [this.datosUbicacion.latitud, this.datosUbicacion.longitud],
      zoom: 6.0,
    });

    const tiles = L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 18,
        minZoom: 3,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }
    );

    tiles.addTo(this.map);
    let marker: any;
    this.map.on('click', (e:any) => {
      if (marker) {
        this.map.removeLayer(marker);
      }

      var myIcon = L.icon({
        iconUrl: '../../assets/images/marker-icon.svg',
        iconSize: [25, 70],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76],
        shadowSize: [68, 95],
        shadowAnchor: [22, 94]
    });

      marker = L.marker([e.latlng.lat, e.latlng.lng], {icon:myIcon,
        draggable: false,
        bounceOnAdd: true,
        title: 'Aquí Estoy',
      } as any)
        .addTo(this.map)
        .bindPopup('Aquí Estoy')
        .openPopup();

      this.onLatLong.emit(e.latlng);
      this.datosUbicacion.latitud = e.latlng.lat;
      this.datosUbicacion.longitud = e.latlng.lng;

    });
  }

  buscarUbicacion() {
    this.map.panTo(new L.LatLng(this.datosUbicacion.latitud, this.datosUbicacion.longitud));

    var myIcon = L.icon({
      iconUrl: '../../assets/images/marker-icon.svg',
      iconSize: [25, 70],
      iconAnchor: [22, 94],
      popupAnchor: [-3, -76],
      shadowSize: [68, 95],
      shadowAnchor: [22, 94]
  });

    var marker = L.marker([this.datosUbicacion.latitud,  this.datosUbicacion.longitud],  {icon:myIcon,
      draggable: false,
      bounceOnAdd: true,
      title: 'Aquí Estoy',
    } as any).addTo(this.map)
    .bindPopup('Aquí Estoy')
    .openPopup();
  }

  constructor(private router:Router) {}

  ngAfterViewInit(): void {
    this.initMap();
  }

  verPago(data:any) {
    console.log("Datos de ubicación" , data);
    localStorage.setItem('ubicacion', JSON.stringify(this.datosUbicacion));
    this.router.navigate([`clientes/carrito/checkout/pago`]);

  }

  irAtras() {
    this.onAtras.emit();
  }

}
