

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { 
  IonContent, 
  IonIcon, 
  IonCard, 
  IonCardContent, 
  IonItem, 
  IonInput, 
  IonButton 
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { 
  personAddOutline, 
  personOutline, 
  mailOutline, 
  lockClosedOutline, 
  shieldCheckmarkOutline, 
  checkmarkCircleOutline 
} from 'ionicons/icons';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule,
    IonContent, 
    IonIcon, 
    IonCard, 
    IonCardContent, 
    IonItem, 
    IonInput, 
    IonButton
  ]
})
export class RegisterComponent  implements OnInit {

  constructor(private router: Router) { 

    // Registro de íconos requeridos para el registro
    addIcons({ 
      personAddOutline, 
      personOutline, 
      mailOutline, 
      lockClosedOutline, 
      shieldCheckmarkOutline, 
      checkmarkCircleOutline 
    });
  }

  ngOnInit() {}

  registrarUsuario() {
    console.log('Procesando registro de usuario...');
    // Tras registrarse con éxito, puedes mandarlo directamente al catálogo
    //this.router.navigate(['/adopcion/perros']);
  }

  irAlLogin(event: Event) {
    event.preventDefault();
    this.router.navigate(['/login']); // Cambia por la ruta exacta de tu vista login
  }

}