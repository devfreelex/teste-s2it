import { Component, OnInit, OnDestroy } from '@angular/core';
import { CharacterModel} from '../../models/character.model';
import { Observable, Subscription } from 'rxjs';
import { CharacterService } from '../../services/character.service';
import { TimerService } from '../../services/timer.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit, OnDestroy {

  characters: Observable<CharacterModel[]>;
  statusLoader: boolean;

  constructor(
    private characterService: CharacterService,
    private timeService: TimerService
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
      });
    });
  }

  isValidStatusGame () {
    if (!this.timeService.getStatusGame()) {
      window.location.hash = '#/';
    }
  }

  startLoader () {
    this.characterService.statusLoader.subscribe( value => {
      this.statusLoader = value;
    });
  }

  ngOnInit() {
    this.startLoader();
    this.isValidStatusGame();
    this.readCharacters();
    this.pagination();
  }

  ngOnDestroy() {

  }

}
