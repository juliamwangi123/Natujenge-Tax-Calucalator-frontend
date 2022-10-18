import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { BillmanagerComponent } from './components/billmanager/billmanager.component';
import { BillManagerComponent } from './components/bill-manager/bill-manager.component';


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'sign-in', component:SignInComponent},
  {path:'sign-up', component:SignUpComponent},
  {path:'bill-manager', component:BillManagerComponent},
  
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
