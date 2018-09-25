import { Component, OnInit } from '@angular/core';
import { TimerService } from '../../services/timer.service';

@Component({
  selector: 'c-modal-finish',
  templateUrl: './modal-finish.component.html',
  styleUrls: ['./modal-finish.component.css']
})
export class ModalFinishComponent implements OnInit {

  status: boolean;
  score: number;

  constructor(private timeService: TimerService) {
    this.score = 0;
  }

  closeModal () {
    this.score = 0;
    this.status = false;
    window.location.hash = '/#';
  }

  ngOnInit() {
    this.timeService.showScore.subscribe(value => this.status = value);
  }

}
