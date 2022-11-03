import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Planta } from './planta';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PlantaService {

constructor(private http: HttpClient) { }

private apiUrl = environment.baseUrl + '202212_MISW4104_Grupo2.json';


getPlantas(): Observable<Planta[]> {
  return this.http.get<Planta[]>(this.apiUrl);
}

}
