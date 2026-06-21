import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButton,
  IonIcon,
  IonButtons,
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { paw } from 'ionicons/icons';
import { Router, RouterLink } from '@angular/router';
import { person } from 'ionicons/icons';
import { Mascotas } from '../../../services/interfaces/mascotas';
import { MASCOTAS_DATA } from '../../../services/data/mascotasdata';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css'],
  standalone: true,
  imports: [
    IonButtons,
    CommonModule,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButton,
    IonIcon,
  ],
})
export class CatalogoComponent implements OnInit {
  mascotas: Mascotas[] = MASCOTAS_DATA; // Todas las mascotas (del servicio o BD)
  mascotasFiltradas: any[] = []; // Las que se muestran
  filtroActual: string = 'perro'; // 'perro' o 'gato'
  
  constructor(private router: Router) {
    addIcons({ paw, person });
  }

  ngOnInit() {
    this.cargarMascotas();
  }

  verDetalle(id: number) {
    console.log('Mascota:', id);
    // navegar al detalle
    this.router.navigate(['/detalleM',id]);
  }
  cargarMascotas() {
   
    this.filtrarPor('perro');
  }

  filtrarPor(tipo: string) {
    this.filtroActual = tipo;

    this.mascotasFiltradas = this.mascotas.filter(
      (mascota) => mascota.tipo === tipo,
    );
  }

  irPerfil() {
    this.router.navigate(['/perfil']);
  }
}
