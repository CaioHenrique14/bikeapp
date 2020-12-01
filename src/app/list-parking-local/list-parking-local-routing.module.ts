import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListParkingLocalPage } from './list-parking-local.page';

const routes: Routes = [
  {
    path: '',
    component: ListParkingLocalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListParkingLocalPageRoutingModule {}
