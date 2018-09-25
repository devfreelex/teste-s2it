import { Component, OnInit } from '@angular/core';
import { TimerService } from '../../services/timer.service';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'c-modal-finish',
  templateUrl: './modal-finish.component.html',
  styleUrls: ['./modal-finish.component.css']
})
export class ModalFinishComponent implements OnInit {

  status: boolean;
  score = 0;

  email: string;
  name: string;

  isNameValid = false;
  isEmailValid = false;

  constructor(
    private timeService: TimerService,
    private gameService: GameService
    ) {  }

  closeModal (): void {
    this.score = 0;
    this.status = false;
    this.gameService.reloader();
  }

  countScore (): void {
    this.gameService.changeTotalScore.subscribe( value => {
      this.score = value;
    });
  }

  changeStateModal (): void {
    this.timeService.showScore.subscribe(value => this.status = value);
  }


  isValidName (): void {
    this.isNameValid = (this.name !== '' && this.name !== undefined && this.name !== 'undefined' && this.name !== null);
    console.log('is valid name ', this.isNameValid)
  }


  isValidEmail(): void{
    // tslint:disable-next-line:max-line-length
    const reg =  /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    console.log('is valid email', reg.test(this.email));
    this.isEmailValid = reg.test(this.email);
  }

  isValidForm(): boolean {
    if (this.isEmailValid && this.isNameValid) {
      return true;
    }
    return false;
  }


  save(): void {

    if (this.isValidForm()) {
      const data = [];
      const gameScore = this.getGameScore();
      const user = {userName: this.name, userEmail: this.email, userScore: this.score};


      if (gameScore) {
        gameScore.push(user);
        this.removeStorage();
        this.saveStorage(gameScore);
        this.closeModal();
        return;
      }

      data.push(user);
      this.removeStorage();
      this.saveStorage(data);

    }
    this.closeModal();
    return;
  }

  getGameScore (): any {
    const gameScore = sessionStorage.getItem('gamescore');
    if (gameScore) {
      return JSON.parse(gameScore);
    }
  }

  saveStorage (data: any) {
    sessionStorage.setItem('gamescore', JSON.stringify(data));
  }

  removeStorage(): void {
    sessionStorage.removeItem('gameScore');
  }

  ngOnInit() {
    this.countScore();
    this.changeStateModal();
  }

}
