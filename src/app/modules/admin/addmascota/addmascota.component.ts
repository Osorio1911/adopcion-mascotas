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
  // 1. Validar que al menos se haya escrito un nombre para evitar meter objetos vacíos
  if (!this.mascota.nombre.trim()) {
    console.error('El nombre de la mascota es obligatorio.');
    return;
  }

  // 2. Construir el nuevo objeto con su ID único e imagen en Base64
  const nuevaMascota: Mascotas = {
    ...this.mascota,
    id: Date.now(),
    // Si hay vista previa (Base64), la usamos; si no, dejamos una cadena vacía o una de respaldo
    imagen: this.imagenPreview ? (this.imagenPreview as string) : ''
  };

  // 3. Insertar la mascota en tu archivo de datos global
  MASCOTAS_DATA.push(nuevaMascota);
  console.log('Mascota guardada con éxito:', nuevaMascota);

  // 4. Mostrar la notificación de éxito
  this.mostrarMensaje();

  // 5. POR ÚLTIMO, navegar hacia el catálogo ya con los datos actualizados
  this.router.navigate(['/mascotasExitentes']);
}



  seleccionarImagen(event: any) {
  const archivo = event.target.files[0];

  if (archivo) {
    const reader = new FileReader();

    reader.onload = () => {
      // Guardamos el Base64 en la propiedad de la vista previa
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




