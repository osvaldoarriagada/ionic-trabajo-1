import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManitoabajoPageRoutingModule } from './manitoabajo-routing.module';

import { ManitoabajoPage } from './manitoabajo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManitoabajoPageRoutingModule
  ],
  declarations: [ManitoabajoPage]
})
export class ManitoabajoPageModule {}
