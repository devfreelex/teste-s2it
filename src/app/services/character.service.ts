import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../models/character.model';



@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private characterApi = 'https://swapi.co/api';



  constructor(private httpClient: HttpClient) {}

  getData (params: string): Observable<Character[]> {
      return this.httpClient.get<Character[]>(`${this.characterApi}/${params}`);
  }


  getMovies () {

  }





}
