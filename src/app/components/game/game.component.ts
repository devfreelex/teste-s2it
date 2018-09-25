import { Component, OnInit, OnDestroy } from '@angular/core';
import { CharacterModel} from '../../models/character.model';
import { Observable, Subscription } from 'rxjs';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit, OnDestroy {

  characters: Observable<CharacterModel[]>;

  constructor(
    private characterService: CharacterService
    ) {}

  readCharacters(): void {
    this.characterService.getData('people/?page=1').subscribe( state => {
      this.characters = state['results'];
    });
  }

  pagination () {
    this.characterService.pageNav.subscribe( page => {
      this.characterService.getData(`people/?page=${page}`).subscribe( state => {
        this.characters = state['results'];
      })
    })
  }

  ngOnInit() {
    this.readCharacters();
    this.pagination();
  }

  ngOnDestroy() {

  }

}
