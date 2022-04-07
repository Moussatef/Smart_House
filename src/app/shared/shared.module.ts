import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DangerAlertComponent } from './components/danger-alert/danger-alert.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    CardComponent,
    NavbarComponent,
    DangerAlertComponent,
    NotFoundComponent,
    HomePageComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    FooterComponent,
    DangerAlertComponent,
    NavbarComponent,
    CardComponent
  ],
})
export class SharedModule { }
