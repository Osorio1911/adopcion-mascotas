import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';
import { Observable } from 'rxjs';
import { Login } from '../interfaces/login';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
 private http = inject(HttpClient);
  private Url: string = environment.enPoinUrl;
  //private apiUrl: string = this.Url + 'Lista/mascotas/';
  private urlogin: string = this.Url + 'login'
 
  login(data: Login):Observable<any> {
    return this.http.post(`${this.urlogin}/login`, data);
  }
}
