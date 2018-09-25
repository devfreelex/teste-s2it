import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { Character } from '../../models/character.model';
import { ToggleModalService } from '../../services/toggle-modal.service';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'c-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit, OnDestroy {

  @Input()
  character: Character;
  subscription: Subscription;

  constructor(private toggleModal: ToggleModalService) {}

  showDetail () {
    this.toggleModal.toggle(this.character);
    return false;
  }

  ngOnInit() {}

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }

}
