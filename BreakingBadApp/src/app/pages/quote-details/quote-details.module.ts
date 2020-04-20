import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuoteDetailsPageRoutingModule } from './quote-details-routing.module';

import { QuoteDetailsPage } from './quote-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuoteDetailsPageRoutingModule
  ],
  declarations: [QuoteDetailsPage]
})
export class QuoteDetailsPageModule {}
