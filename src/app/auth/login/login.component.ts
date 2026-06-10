import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import { paw, mailOutline, lockClosedOutline, arrowForwardOutline } from 'ionicons/icons';
import { 
  IonContent, 
  IonIcon, 
  IonCard, 
  IonCardContent, 
  IonItem, 
  IonInput, 
  IonButton 
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true, // Asegúrate de que esta línea esté en true
  imports: [
    RouterLink,
    CommonModule, 
    FormsModule,
    // 2. Registra los componentes aquí para que el HTML los reconozca
    IonContent, 
    IonIcon, 
    IonCard, 
    IonCardContent, 
    IonItem, 
    IonInput, 
    IonButton
  ]
})
export class LoginComponent  implements OnInit {

  constructor(private router: Router) { 
  addIcons({ paw, mailOutline, lockClosedOutline, arrowForwardOutline });

  }

  ngOnInit() {}

  iniciarSesion() {
    // Aquí irá la validación básica. Si es exitosa, rediriges al catálogo:
    console.log('Iniciando sesión...');
    this.router.navigate(['/catalogoM']); 
  }
   iniciarSesion2() {
    // Aquí irá la validación básica. Si es exitosa, rediriges al catálogo:
    console.log('Iniciando sesión...');
    this.router.navigate(['/addmascota']); 
  }
}
