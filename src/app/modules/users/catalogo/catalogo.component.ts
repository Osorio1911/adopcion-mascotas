import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButton,
  IonIcon, IonButtons } from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { paw } from 'ionicons/icons';
import { Router, RouterLink } from '@angular/router';
import { person } from 'ionicons/icons';


@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css'],
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
export class CatalogoComponent implements OnInit {
  mascotas = [
    {
      id: 1,
      nombre: 'Doby',
      imagen: 'assets/img/perro1.jpg',
      tipo: 'perro'
    },
    {
      id: 2,
      nombre: 'Somet',
      imagen: 'assets/img/perro2.jpg',
       tipo: 'perro'
    },
    {
      id: 3,
      nombre: 'Sot3',
      imagen: 'assets/img/perro3.jpg',
       tipo: 'perro'
    },
    {
      id: 4,
      nombre: 'Carty',
      imagen: 'assets/img/perro4.jpg',
       tipo: 'perro'
    },
    {
      id: 5,
      nombre: 'Sara',
      imagen: 'assets/img/perro5.jpg',
       tipo: 'perro'
    },
    {
      id: 6,
      nombre: 'Cartalo',
      imagen: 'assets/img/perro6.jpg',
       tipo: 'perro'
    },
    {
      id: 7,
      nombre: 'Fries',
      imagen: 'assets/img/perro7.jpg',
       tipo: 'perro'
    },
     {
      id: 8,
      nombre: 'Tomi',
      imagen: 'assets/img/gato1.jpg',
       tipo: 'gato'
    },
  ];
  
  //mascotasf: any[] = [];           // Todas las mascotas (del servicio o BD)
  mascotasFiltradas: any[] = [];  // Las que se muestran
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
   this.router.navigate(['/detalleM']); 
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
  this.router.navigate(['/perfil']);
}

}
