import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AccessGuard } from './access.guard';

const routes: Routes = [
  // {
  //   path:'bookList', component:BookComponent
  // },
  // { path: 'book/:id', component: BookDetailsComponent}
  {path: '',redirectTo:"home", pathMatch: 'full',},
  {path:"home",component:HomeComponent ,canActivate:[AccessGuard]},
  {path:"login",component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
