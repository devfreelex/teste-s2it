import { Component, OnInit } from '@angular/core';
import { TimerService } from '../../services/timer.service';

@Component({
  selector: 'c-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {



  constructor(private timerService: TimerService) { }

  start () {
    this.timerService.setStatusGame();
    this.timerService.startTimer();
    return false;
  }

  ngOnInit() {
  }

}
