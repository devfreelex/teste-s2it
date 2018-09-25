import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  timeChange: Subject<number>;
  stateTimer: Subject<boolean>;
  showScore: Subject<boolean>;

  private interval: any;
  private timer: number;
  private limitTime: number;
  private statusGame: boolean;

  constructor() {
    this.limitTime = 120;
    this.timer = this.limitTime;
    this.stateTimer = new Subject<boolean>();
    this.timeChange = new Subject<number>();
    this.showScore = new Subject<boolean>();
  }

  startTimer() {
    if (this.timer === 0) {
      this.clearInterval();
      this.restart();
    }
    this.interval = setInterval(this.counter.bind(this), 1000);
    return false;
  }

  counter() {
    if (this.timer > 0) {
      this.timer -= 1;

      this.timeChange.next(this.timer);

      return;
    }

    this.stateTimer.next(true);
  }

  clearInterval() {
    clearInterval(this.interval);
  }

  restart () {
    this.timer = this.limitTime;
    this.stateTimer.next(false);
    this.timeChange.next(this.timer);
  }

  setStatusGame () {
    this.statusGame = true;
  }

  getStatusGame () {
    return this.statusGame;
  }

}
