import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonFab,
  IonFabButton,
  IonIcon,
  IonButtons,
  IonButton,
} from '@ionic/angular/standalone';


import { addIcons } from 'ionicons';
import { arrowBackOutline, logoWhatsapp } from 'ionicons/icons';
@Component({
  selector: 'app-userdetailmasc',
  templateUrl: './userdetailmasc.component.html',
  styleUrls: ['./userdetailmasc.component.css'],
  standalone: true,
  imports: [
    IonButtons,
    IonButton,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonFab,
    IonFabButton,
    IonIcon,
  ],
})
export class UserdetailmascComponent implements OnInit {
  mascota = {
    id: 1,
    nombre: 'Doby',
    imagen: 'assets/img/perro4.jpg',
    tipo: 'Perro',
  };
  constructor(private router: Router) {
    addIcons({
      logoWhatsapp,
      arrowBackOutline,
    });
  }

  ngOnInit() {}

  volverCatalogo() {
  this.router.navigate(['/catalogoM']);
}

irCatalogo() {
  this.router.navigate(['/catalogoM']);
}

  contactarWhatsapp() {
    window.open('https://wa.me/573001234567', '_blank');
  }
}
