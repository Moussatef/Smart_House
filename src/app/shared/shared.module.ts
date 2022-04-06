import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DangerAlertComponent } from './components/danger-alert/danger-alert.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CardComponent,
    NavbarComponent,
    DangerAlertComponent,
    NotFoundComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    DangerAlertComponent,
    NavbarComponent,
    CardComponent
  ],
})
export class SharedModule { }
