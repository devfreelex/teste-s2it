import { Component, OnInit } from '@angular/core';
import { TimerService } from '../../services/timer.service';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'c-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {



  constructor(
    private timerService: TimerService,
    private gameService: GameService
    ) { }

  start () {
    this.timerService.setStatusGame();
    this.timerService.startTimer();
    return false;
  }

  ngOnInit() {

  }

}
