import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuoteDetailsPage } from './quote-details.page';

const routes: Routes = [
  {
    path: '',
    component: QuoteDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuoteDetailsPageRoutingModule {}
