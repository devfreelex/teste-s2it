import { Component, OnInit, OnDestroy } from '@angular/core';
import { ToggleModalService } from '../../services/toggle-modal.service';
import { Character } from '../../models/character.model';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Subscription } from 'rxjs';

@Component({
  selector: 'c-modal-detail',
  templateUrl: './modal-detail.component.html',
  styleUrls: ['./modal-detail.component.css']
})
export class ModalDetailComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  planet = '';
  hairColor: any;
  height: any;
  films: any;
  vehicles: any;
  species: any;
  isVisible: boolean;

  constructor(
      private toggleModalService: ToggleModalService,
      private httpClient: HttpClient
    ) { }

  showModal () {
    this.isVisible = true;
    return false;
  }

  hideModal () {
    this.planet = '';
    this.hairColor = [];
    this.height = [];
    this.isVisible = false;
    this.vehicles = [];
    this.films = [];
    this.species = [];
    return false;
  }

  ngOnInit() {
    this.subscription = this.toggleModalService.character.subscribe( value => {
      this.setCharacter(value);
      this.getPlanet(value);
      this.getVehicles(value);
      this.getFilms(value);
      this.getSpecies(value);
      this.showModal();
    });
  }


  getVehicles (data: Character): void {
    const vehicles = data['vehicles'].map( vehicle => {
      return this.httpClient.get(vehicle);
    });



    forkJoin([...vehicles]).subscribe( results => {
      this.vehicles = results.map( vehicle => vehicle['name']).join(', ');
    });
  }


  getFilms (data: Character): void {
    const films = data['films'].map( film => {
      return this.httpClient.get(film);
    });

    forkJoin([...films]).subscribe( results => {
      this.films = results.map( film => film['title']).join(', ');

    });
  }

  getSpecies (data: Character): void {
    const species = data['species'].map( specie => {
      return this.httpClient.get(specie);
    });

    forkJoin([...species]).subscribe( results => {
      this.species = results.map( specie => specie['name']).join(', ');

    });
  }


  getPlanet (data: Character): void {
    this.httpClient.get(data['homeworld']).subscribe( planet => {
      this.planet = planet['name'];
    });
  }


  setCharacter (data: Character) { console.log(data)
    this.hairColor = data['hair_color'];
    this.height = data['height']
  }


  ngOnDestroy () {
    this.subscription.unsubscribe();
  }

}
