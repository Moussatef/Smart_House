import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DangerAlertComponent } from './components/danger-alert/danger-alert.component';



@NgModule({
  declarations: [
    CardComponent,
    NavbarComponent,
    DangerAlertComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DangerAlertComponent,
    NavbarComponent,
    CardComponent
  ],
})
export class SharedModule { }
