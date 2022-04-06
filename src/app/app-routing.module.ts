import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { HomePageComponent } from './shared/components/home-page/home-page.component';
import { ProfileComponent } from './private/components/profile/profile.component';


const routes: Routes = [
  { path: '',
   pathMatch: 'full',
    redirectTo:'home' },  
    {
      path:'home' ,
       component  : HomePageComponent
    },
    {
      path:'my-divaces',
      component: ProfileComponent
    },
  // {
  //   path:'followers' ,
  //    component  :FollowersComponent,
  //    canActivate: [AuthGuard]
  // },
  // {
  //   path:'followers/:id' ,
  //    component  :ProfilfollowerComponent
  // },
  {
    path:'**',
    component : NotFoundComponent
  }

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule {

 }
