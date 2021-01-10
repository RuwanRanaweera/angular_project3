import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

import {AboutComponent} from './about/about.component';
import {PlacesComponent} from './places/places.component';
import {ContactComponent} from './contact/contact.component';
import {LoginComponent} from './login/login.component';
import {SigninComponent} from './signin/signin.component';




const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'places', component: PlacesComponent },
  { path: 'contact', component: ContactComponent},
  { path: 'signin', component: SigninComponent},
  { path: 'login', component: LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
