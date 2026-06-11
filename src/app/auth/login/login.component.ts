import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import {
  paw,
  mailOutline,
  lockClosedOutline,
  arrowForwardOutline,
} from 'ionicons/icons';
import {
  IonContent,
  IonIcon,
  IonCard,
  IonCardContent,
  IonItem,
  IonInput,
  IonButton,
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api/api.service';

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
    IonButton,
  ],
})
export class LoginComponent implements OnInit {
  private Service = inject(ApiService);
  correo: string = '';
  ClaveHash: string = '';
  constructor(private router: Router) {
    addIcons({ paw, mailOutline, lockClosedOutline, arrowForwardOutline });
  }

  ngOnInit() {}

  iniciarSesion() {
    const loginData = {
      correo: this.correo,
      ClaveHash: this.ClaveHash,
    };
    this.Service.login(loginData).subscribe({
      next: (resp) => {
        localStorage.setItem('usuario', JSON.stringify(resp));
        if (resp.tipoUsuario == 'Fundacion') {
          this.router.navigate(['/addmascota']);
          console.log('Login correcto', resp);
        }else if(resp.tipoUsuario == 'Adoptante'){
          this.router.navigate(['/catalogoM']);
        }
      },
      error: (err) => {
        console.error('Error login', err);
      },
    });
  }
  
}
