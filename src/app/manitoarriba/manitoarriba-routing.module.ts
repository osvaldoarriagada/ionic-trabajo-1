import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManitoarribaPage } from './manitoarriba.page';

const routes: Routes = [
  {
    path: '',
    component: ManitoarribaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManitoarribaPageRoutingModule {}
