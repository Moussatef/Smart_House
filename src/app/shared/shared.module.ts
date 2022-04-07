import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DangerAlertComponent } from './components/danger-alert/danger-alert.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HereSectionComponent } from './components/here-section/here-section.component';
import { FeaturesSectionComponent } from './components/features-section/features-section.component';
import { FeaturesServicesSectionComponent } from './components/features-services-section/features-services-section.component';
import { CountsSectionComponent } from './components/counts-section/counts-section.component';
import { OurClientsSectionComponent } from './components/our-clients-section/our-clients-section.component';
import { ServicesSectionComponent } from './components/services-section/services-section.component';



@NgModule({
  declarations: [
    CardComponent,
    NavbarComponent,
    DangerAlertComponent,
    NotFoundComponent,
    HomePageComponent,
    FooterComponent,
    HereSectionComponent,
    FeaturesSectionComponent,
    FeaturesServicesSectionComponent,
    CountsSectionComponent,
    OurClientsSectionComponent,
    ServicesSectionComponent
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
