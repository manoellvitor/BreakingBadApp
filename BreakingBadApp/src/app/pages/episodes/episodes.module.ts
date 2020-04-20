import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EpisodesPageRoutingModule } from './episodes-routing.module';

import { EpisodesPage } from './episodes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EpisodesPageRoutingModule
  ],
  declarations: [EpisodesPage]
})
export class EpisodesPageModule {}
