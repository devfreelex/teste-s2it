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
  statusLoader: Subject<boolean>;
  pageNav: Subject<number>;


  constructor(private httpClient: HttpClient) {
    this.pageNav = new Subject<number>();
    this.statusLoader = new Subject<boolean>();
  }

  getData (params: string): Observable<Character[]> {
      this.statusLoader.next(true);
      return this.httpClient.get<Character[]>(`${this.characterApi}/${params}`);
  }

  pagePrev (): void {
    if (this.pageNumber > 1) {
      this.statusLoader.next(true);
      this.pageNumber = this.pageNumber - 1;
      this.pageNav.next(this.pageNumber);
    }
  }

  pageNext (): void {
    this.statusLoader.next(true);
      this.pageNumber = this.pageNumber + 1;
      this.pageNav.next(this.pageNumber);
  }

}
