import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EpisodesPage } from './episodes.page';

const routes: Routes = [
  {
    path: '',
    component: EpisodesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EpisodesPageRoutingModule {}
