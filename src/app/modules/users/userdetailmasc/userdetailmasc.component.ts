import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
import { Mascotas } from '../../../services/interfaces/mascotas';
import { MASCOTAS_DATA } from '../../../services/data/mascotasdata';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-userdetailmasc',
  templateUrl: './userdetailmasc.component.html',
  styleUrls: ['./userdetailmasc.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    IonButtons,
    IonButton,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonIcon,
    
  ],
})
export class UserdetailmascComponent implements OnInit {
  mascota?: Mascotas;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {
    addIcons({
      logoWhatsapp,
      arrowBackOutline,
    });
  }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.mascota = MASCOTAS_DATA.find((m) => m.id === id);
    console.log('aqui detalle', id  )
  }

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
