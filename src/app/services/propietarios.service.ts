import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Propietario } from '../interfaces/propietario';

@Injectable({
  providedIn: 'root'
})
export class PropietariosService {
  private readonly http = inject(HttpClient);

ruta: string = "https://localhost:7212/api/propietarioapi";

  todos(): Observable<Propietario[]> {
    return this.http.get<Propietario[]>(this.ruta);
  }

  insertar(propietario: Propietario): Observable<Propietario> {
  console.log("Enviando a API:", propietario);
  return this.http.post<Propietario>(this.ruta, propietario);
}
  }
