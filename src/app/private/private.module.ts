import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { PrivateComponent } from './private.component';
import { SharedModule } from '../shared/shared.module';
import { DevicePageComponent } from './components/device-page/device-page.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DivaceModalComponent } from './components/divace-modal/divace-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { DivaceValidationDirective } from './directives/divace-validation.directive';


@NgModule({
  declarations: [
    PrivateComponent,
    DevicePageComponent,
    ProfileComponent,
    DivaceModalComponent,
    DivaceValidationDirective
  ],

  imports: [
    CommonModule,
    PrivateRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[ProfileComponent,DevicePageComponent]

})
export class PrivateModule { }
