import { Injectable } from '@angular/core';
import { Alert } from 'selenium-webdriver';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {


  changeTotalScore: Subject<number>;
  private scoreBoard = new Array();

  constructor() {
    this.changeTotalScore = new Subject<number>();
  }

  updateScoreBoard (name: string, score: number) {
    const character = {characterName: name, characterScore: score};

    if (this.scoreBoard.length && this.hasCharacter(name)) {
      this.updateValue(name, score);
      return;
    }

    this.scoreBoard.push(character);
    this.countTotalScore();
  }

  updateValue (name: string, score: number) {
    this.scoreBoard.forEach(item => {
      if (item['characterName'] === name) {
        item['characterScore'] = score;
      }
    });
  }


  countTotalScore () {
    let total = 0;

    this.scoreBoard.forEach( item => {
      total += item['characterScore'];
    });

    this.changeTotalScore.next(total);
  }


  hasCharacter(name: string) {
    return this.scoreBoard.some( item => {
       return item['characterName'] === name;
     });
   }

   reloader () {
     setTimeout(() => {
      window.location.reload();

     }, 100);

     window.location.hash = '/#';
   }


}
