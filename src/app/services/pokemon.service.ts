import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  baseUrl: string = environment.baseUrl; //registro de url desde clase enviroment

  constructor(private http: HttpClient) { } //llamada http request

  //Metodo que obtiene pokemon
  getPokemons(index){
    return this.http.get<any>(`${this.baseUrl}/pokemon/${index}`);
  }


}
