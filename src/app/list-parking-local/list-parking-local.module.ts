import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListParkingLocalPageRoutingModule } from './list-parking-local-routing.module';

import { ListParkingLocalPage } from './list-parking-local.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListParkingLocalPageRoutingModule
  ],
  declarations: [ListParkingLocalPage]
})
export class ListParkingLocalPageModule {}
