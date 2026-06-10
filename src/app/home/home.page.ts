import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonRouterOutlet, IonApp } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonApp, IonRouterOutlet,CommonModule,
    // 2. REGÍSTRALOS AQUÍ para que el HTML los reconozca
    IonApp,
    IonRouterOutlet ],
})
export class HomePage {
  constructor() {}
}
