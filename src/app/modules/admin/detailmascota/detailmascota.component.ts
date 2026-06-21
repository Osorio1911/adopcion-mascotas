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
  IonIcon,
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { arrowBackOutline, createOutline, trashOutline } from 'ionicons/icons';
import { ModalController } from '@ionic/angular';
import { MascotaedtitComponent } from '../modals/edit/mascotaedtit.component';

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
    IonIcon,
  ],
  providers: [ModalController]
})
export class DetailmascotaComponent implements OnInit {
  mascota?: Mascotas;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private modalController: ModalController
  ) {
    addIcons({arrowBackOutline,createOutline,trashOutline,});
  }

  ngOnInit() {
    this.mascota = MASCOTAS_DATA[0];
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.mascota = MASCOTAS_DATA.find((m) => m.id === id);
  }
  
  abrirModalEditar() {
  this.modalController.create({
    component: MascotaedtitComponent,
    componentProps: {
      mascotaAEditar: this.mascota 
    }
  }).then(modal => {
    
    // Una vez creado el modal, lo presentamos
    modal.present();

    // Programamos qué pasa cuando el modal se cierre
    modal.onDidDismiss().then(resultado => {
      if (resultado.data) {
        // Asignamos la data modificada que viene desde el modal
        this.mascota = resultado.data; 
        console.log('Detalle actualizado sin async/await:', this.mascota);
      }
    });

  });
}

  volverCatalogo() {
    this.router.navigate(['/mascotasExitentes']);
  }
}
