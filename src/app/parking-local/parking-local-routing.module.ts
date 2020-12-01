import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParkingLocalPage } from './parking-local.page';

const routes: Routes = [
  {
    path: '',
    component: ParkingLocalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParkingLocalPageRoutingModule {}
