import { Component, OnInit } from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonIcon
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';

import { addIcons } from 'ionicons';
import {
  arrowBackOutline,
  logOutOutline,
  pawOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-perfiladmin',
  templateUrl: './perfiladmin.component.html',
  styleUrls: ['./perfiladmin.component.css'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton,
    IonIcon
  ]
})
export class PerfiladminComponent  implements OnInit {

  administrador = {
    nombre: 'Carlos Rodríguez',
    cargo: 'Administrador',
    empresa: 'Centro de Adopción Huellitas',
    correo: 'admin@huellitas.com',
    telefono: '3001234567',
    direccion: 'Calle 10 #20-30',
    foto: 'assets/img/admin.jpg'
  };

  estadisticas = {
    mascotasDisponibles: 11,
    mascotasAdoptadas: 45,
    solicitudes: 18
  };


  constructor(private router: Router) {

    addIcons({
      arrowBackOutline,
      logOutOutline,
      pawOutline
    });

  }
  ngOnInit() {}

   volverCatalogo() {
    this.router.navigate(['/mascotasExitentes']);
  }

  administrarMascotas() {
    this.router.navigate(['/mascotasExitentes']);
  }

  cerrarSesion() {

    //localStorage.clear();

    this.router.navigate(['/login']);

  }

}


