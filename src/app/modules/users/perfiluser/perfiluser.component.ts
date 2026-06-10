import { Component, OnInit } from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButton,
  IonButtons,
  IonIcon
} from '@ionic/angular/standalone';

import { Router } from '@angular/router';

import { addIcons } from 'ionicons';
import { arrowBackOutline } from 'ionicons/icons';


@Component({
  selector: 'app-perfiluser',
  templateUrl: './perfiluser.component.html',
  styleUrls: ['./perfiluser.component.css'],
   standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButton,
    IonButtons,
    IonIcon
  ]
})
export class PerfiluserComponent  implements OnInit {
usuario = {
    nombre: 'Juan Pérez',
    correo: 'juan@gmail.com',
    documento: '123456789',
    telefono: '3001234567',
    ciudad: 'Bogotá',
    direccion: 'Calle 10 #20-30'
  };
 constructor(private router: Router) {
    addIcons({
      arrowBackOutline
    });
  }

  ngOnInit() {}
  volverCatalogo() {
    this.router.navigate(['/catalogoM']);
  }
  cerrarSesion() {

  // Limpiar datos almacenados
  //localStorage.clear();

  // Redirigir al login
  this.router.navigate(['/login']);

}

}
