import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeathsPage } from './deaths.page';

const routes: Routes = [
  {
    path: '',
    component: DeathsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeathsPageRoutingModule {}
