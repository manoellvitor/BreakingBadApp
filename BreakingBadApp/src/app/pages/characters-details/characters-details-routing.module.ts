import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharactersDetailsPage } from './characters-details.page';

const routes: Routes = [
  {
    path: '',
    component: CharactersDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharactersDetailsPageRoutingModule {}
