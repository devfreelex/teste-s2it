import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Character } from '../../models/character.model';
import { ToggleModalService } from '../../services/toggle-modal.service';
import { setContextDirty } from '@angular/core/src/render3/styling';
import { GameService } from '../../services/game.service';
import { CharacterService } from '../../services/character.service';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'c-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit, OnDestroy {

  @Input()
  character: Character;

  characterName: string;
  subscription: Subscription;

  private score: number;
  private bigPointing = 10;
  private littlePointing = 5;
  private lessPoint = 0;
  private helpStatus: boolean;
  statusLoader = false;

  constructor(
    private toggleModal: ToggleModalService,
    private gameService: GameService,
    private characterService: CharacterService
    ) {
    this.score = 0;
    this.helpStatus = false;
    this.characterService.statusLoader.next(false);
  }

  showDetail () {
    this.toggleModal.toggle(this.character);
    this.setSatatusHelped();
    return false;
  }

  isNameCorrect () {

    const isEqualNames = this.isEqualNames(this.characterName, this.character.name);

    if (!isEqualNames) {
      this.setScore(this.lessPoint);
      return;
    }

    if (isEqualNames && !this.helpStatus) {
      console.log('chegando aqui', this.helpStatus);
      this.setScore(this.bigPointing);
      return;
    }

    this.setScore(this.littlePointing);
  }

  setScore (score: number) {
    this.score = score;
    this.gameService.updateScoreBoard(this.character.name, this.score);
  }

  isEqualNames (firstName: string, lastName: string) {
    return firstName === lastName;
  }

  setSatatusHelped () {
    this.helpStatus = true;
  }

  ngOnInit() {}

  ngOnDestroy() {}

}
