import { Component, OnInit } from '@angular/core';
import { TimerService } from '../../services/timer.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'c-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  timer: number;
  status: boolean;

  constructor(private timeService: TimerService) {
    this.timer = 120;
  }

  ngOnInit() {

    this.timeService.timeChange.subscribe( value => {
      this.timer = value;
    });

    this.timeService.stateTimer.subscribe( value => {
      this.status = value;
      this.timeService.showScore.next(true);
    });

}
