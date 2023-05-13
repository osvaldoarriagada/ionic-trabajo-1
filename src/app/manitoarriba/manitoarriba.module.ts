import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManitoarribaPageRoutingModule } from './manitoarriba-routing.module';

import { ManitoarribaPage } from './manitoarriba.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManitoarribaPageRoutingModule
  ],
  declarations: [ManitoarribaPage]
})
export class ManitoarribaPageModule {}
