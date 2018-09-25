import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './components/app.component';
import { StartComponent } from './components/start/start.component';
import { GameComponent } from './components/game/game.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { CharacterComponent } from './components/character/character.component';
import { PaginavComponent } from './components/paginav/paginav.component';
import { TimerComponent } from './components/timer/timer.component';
import { ModalDetailComponent } from './components/modal-detail/modal-detail.component';
import { ModalFinishComponent } from './components/modal-finish/modal-finish.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    GameComponent,
    CharacterComponent,
    PaginavComponent,
    TimerComponent,
    ModalDetailComponent,
    ModalFinishComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
