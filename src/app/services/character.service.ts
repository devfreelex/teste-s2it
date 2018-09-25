import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Character } from '../models/character.model';



@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private characterApi = 'https://swapi.co/api';
  private pageNumber = 1;
  pageNav: Subject<number>;


  constructor(private httpClient: HttpClient) {
    this.pageNav = new Subject<number>();
  }

  getData (params: string): Observable<Character[]> {
      return this.httpClient.get<Character[]>(`${this.characterApi}/${params}`);
  }

  pagePrev () {
    if (this.pageNumber > 1) {
      this.pageNumber = this.pageNumber - 1;
      this.pageNav.next(this.pageNumber);
    }
  }

  pageNext () {
      this.pageNumber = this.pageNumber + 1;
      this.pageNav.next(this.pageNumber);
  }

}
