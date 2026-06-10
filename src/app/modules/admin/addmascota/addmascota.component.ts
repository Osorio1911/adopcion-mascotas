import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  IonInput,
  IonTextarea,
  IonSelect,
  IonSelectOption,
  IonButtons,
  IonHeader,
  IonIcon,
  IonContent,
  IonButton,
  IonToolbar,
  IonTitle,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { arrowBackOutline, paw } from 'ionicons/icons';
import { Mascotas } from '../../../services/interfaces/mascotas';
import { MASCOTAS_DATA } from '../../../services/data/mascotasdata';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-addmascota',
  templateUrl: './addmascota.component.html',
  styleUrls: ['./addmascota.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,

    IonTitle,
    IonToolbar,
    IonButton,
    IonContent,
    IonIcon,
    IonHeader,
    IonInput,
    IonTextarea,
    IonSelect,
    IonSelectOption,
    IonButtons,
  ],
})
export class AddmascotaComponent implements OnInit {
    
  mascota: Mascotas = {
    id: 0,
    nombre: '',
    tipo: '',
    raza: '',
    edad: 0,
    descripcion: '',
    imagen: '',
    estado: 'Disponible',
  };
  imagenPreview: string | ArrayBuffer | null = null;




  constructor(private router: Router,  private toastController: ToastController) {
    addIcons({arrowBackOutline,paw});
  }

  ngOnInit() {
  }

  verMascotas() {
   console.log('Click');
  this.router.navigate(['/mascotasExitentes']);
  }


  volverCatalogo() {
    
  }
guardarMascota() {
  this.router.navigate(['/mascotasExitentes']);
  this.mostrarMensaje();

    const nuevaMascota: Mascotas = {
      ...this.mascota,
      id: Date.now(),
    };

    MASCOTAS_DATA.push(nuevaMascota);

    console.log('Mascota agregada');

    console.log(nuevaMascota);

    console.log('Listado completo');

    console.table(MASCOTAS_DATA);
  }



  seleccionarImagen(event: any) {
    const archivo = event.target.files[0];

    if (archivo) {
      this.mascota.imagen = archivo.name;

      const reader = new FileReader();

      reader.onload = () => {
        this.imagenPreview = reader.result;
      };

      reader.readAsDataURL(archivo);
    }
  }

  async mostrarMensaje() {
  const toast = await this.toastController.create({
    message: 'Mascota guardada correctamente 🐾',
    duration: 2500,
    position: 'top',
    color: 'success',
    icon: 'checkmark-circle'
  });

  await toast.present();
}
}




