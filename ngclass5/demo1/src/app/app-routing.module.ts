import { RestrictGuard } from './Guard/restrict.guard';
import { AuthGuard } from './Guard/auth.guard';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:'home',component:HomeComponent},
  {path:"user",component:UserComponent,canActivate:[AuthGuard]},
  {path:"login",component:LoginComponent},
  {path:"registration",component:RegistrationComponent,canDeactivate:[RestrictGuard]},
  {path:"**",component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
