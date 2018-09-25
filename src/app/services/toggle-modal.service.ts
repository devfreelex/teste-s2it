import { Injectable, EventEmitter } from '@angular/core';
import { Character } from '../models/character.model';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ToggleModalService {

  character: Subject<Character>;

  constructor() {
    this.character = new Subject<Character>();
  }

  toggle(data: Character) {
    this.character.next(data);
  }
}
