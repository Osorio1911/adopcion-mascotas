import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Mascotas } from '../../../services/interfaces/mascotas';
import { MASCOTAS_DATA } from '../../../services/data/mascotasdata';
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButton,
  IonIcon, IonButtons } from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { paw, arrowBackOutline, personCircle } from 'ionicons/icons';
import { Router, RouterLink } from '@angular/router';
import { person } from 'ionicons/icons';

@Component({
  selector: 'app-mascotasadd',
  templateUrl: './mascotasadd.component.html',
  styleUrls: ['./mascotasadd.component.css'],
  standalone: true,
  imports: [IonButtons, 
    CommonModule,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButton,
    IonIcon,
  ],
})
export class MascotasaddComponent  implements OnInit {
   
  mascotas: Mascotas[] = MASCOTAS_DATA;           // Todas las mascotas (del servicio o BD)
  mascotasFiltradas: any[] = [];  // Las que se muestran
  filtroActual: string = 'perro'; // 'perro' o 'gato'

  constructor(private router: Router) {
    addIcons({arrowBackOutline,personCircle,paw,person});
  }


  ngOnInit() {
    this.cargarMascotas();
  }

  verDetalle(id: number) {
    console.log('Mascota:', id);

    // navegar al detalle
   this.router.navigate(['/detailmascota',id]); 
  }
  cargarMascotas() {
    // Aquí cargas tus mascotas (desde un servicio, API, etc.)
    // Ejemplo:
    

    // Inicialmente mostramos solo perros
    this.filtrarPor('perro');
  }

  filtrarPor(tipo: string) {
    this.filtroActual = tipo;
    
    this.mascotasFiltradas = this.mascotas.filter(mascota => 
      mascota.tipo === tipo
    );
  }

  irPerfil() {
  this.router.navigate(['/perfilAdmin']);
}

irAdd(){
   this.router.navigate(['/addmascota']);
}

}
