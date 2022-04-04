import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { PrivateComponent } from './private.component';
import { SharedModule } from '../shared/shared.module';
import { DevicePageComponent } from './components/device-page/device-page.component';
import { ProfileComponent } from './components/profile/profile.component';


@NgModule({
  declarations: [
    PrivateComponent,
    DevicePageComponent,
    ProfileComponent
  ],

  imports: [
    CommonModule,
    PrivateRoutingModule,
    SharedModule
  ],
  exports:[ProfileComponent,DevicePageComponent]

})
export class PrivateModule { }
