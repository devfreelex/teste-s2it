import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { CharacterService } from '../../services/character.service';
import { Character } from '../../models/character.model';

@Component({
  selector: 'c-paginav',
  templateUrl: './paginav.component.html',
  styleUrls: ['./paginav.component.css']
})
export class PaginavComponent implements OnInit {

  statusLoader = true;

  constructor(private characterService: CharacterService) {}

  pageNext () {
    this.characterService.pageNext();
    return false;
  }

  pagePrev () {
    this.characterService.pagePrev();
    return false;
  }

  ngOnInit() {
    this.characterService.statusLoader.subscribe(value => {
      this.statusLoader = value;
    });
  }

}
