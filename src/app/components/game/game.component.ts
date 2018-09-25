import { Component, OnInit } from '@angular/core';
import { CharacterModel} from '../../models/character.model';
import { Observable } from 'rxjs';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  characters: Observable<CharacterModel[]>;

  constructor(
    private characterServie: CharacterService
    ) {}

  readCharacters(): void {
    this.characterServie.getData('people').subscribe( state => {
      this.characters = state['results'];
    });
  }

  ngOnInit() {
    this.readCharacters();
  }

}
