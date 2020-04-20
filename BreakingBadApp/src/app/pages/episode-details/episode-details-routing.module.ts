import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EpisodeDetailsPage } from './episode-details.page';

const routes: Routes = [
  {
    path: '',
    component: EpisodeDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EpisodeDetailsPageRoutingModule {}
