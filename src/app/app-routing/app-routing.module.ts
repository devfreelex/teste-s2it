import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StartComponent } from '../components/start/start.component';
import { GameComponent } from '../components/game/game.component';



const routes: Routes = [
  {
    path: 'start',
    component: StartComponent,
  },
  {
    path: 'game',
    component: GameComponent,
  },
  { path: '',
    redirectTo: '/start',
    pathMatch: 'full'
  },
  // { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })
  ]
})
export class AppRoutingModule {
}
