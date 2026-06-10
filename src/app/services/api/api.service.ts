import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  private Url: string = environment.enPoinUrl;
   private apiUrl: string = this.Url + 'Lista/mascotas/';
  
}
