import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mascotas } from '../../../services/interfaces/mascotas';
import { MASCOTAS_DATA } from '../../../services/data/mascotasdata';
import { CommonModule } from '@angular/common';
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
  selector: 'app-detailmascota',
  templateUrl: './detailmascota.component.html',
  styleUrls: ['./detailmascota.component.css'],
   standalone: true,
  imports: [
    CommonModule,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButton,
    IonButtons,
    IonIcon
  ]
 
})
export class DetailmascotaComponent implements OnInit {

  mascota?: Mascotas;

  constructor(private route: ActivatedRoute,private router: Router) {
    addIcons({
    arrowBackOutline
  });
  }
  
  ngOnInit() {
    const id = Number(
      this.route.snapshot.paramMap.get('id')
    );
    this.mascota = MASCOTAS_DATA.find(
      m => m.id === id
    );
    
  }

  volverCatalogo() {
  this.router.navigate(['/mascotasExitentes']);
}
}
