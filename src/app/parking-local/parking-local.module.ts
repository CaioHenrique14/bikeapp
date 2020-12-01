import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParkingLocalPageRoutingModule } from './parking-local-routing.module';

import { ParkingLocalPage } from './parking-local.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ParkingLocalPageRoutingModule
  ],
  declarations: [ParkingLocalPage]
})
export class ParkingLocalPageModule {}
