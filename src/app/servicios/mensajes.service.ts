import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const url = 'http://localhost/backendphp/mensajes/'
@Injectable({
  providedIn: 'root'
})
export class MensajesService {

  constructor(private http:HttpClient) { }

  enviarMensaje(mensaje): Observable<any>{
    return this.http.post(url, mensaje)
  }

}
