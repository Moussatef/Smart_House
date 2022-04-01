import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { PrivateComponent } from './private.component';
import { SharedModule } from '../shared/shared.module';
import { DevicePageComponent } from './components/device-page/device-page.component';


@NgModule({
  declarations: [
    PrivateComponent,
    DevicePageComponent
  ],

  imports: [
    CommonModule,
    PrivateRoutingModule,
    SharedModule
  ],
  exports:[DevicePageComponent]

})
export class PrivateModule { }
