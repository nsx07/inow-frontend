import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './shared/nav/nav.component';

const routes: Routes = [
  {path : "login", component : LoginComponent},
  {path : "signup", component : SignupComponent},
  {path : "main", component : NavComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
