import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SigninComponent } from './components/signin/signin.component';
import { ProductComponent } from './components/product/product.component';
import { authGuard } from './guard/auth.guard';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/home', 
    pathMatch: 'full' 
  },
  { 
    path: 'home', 
    component: HomeComponent,
    canActivate: [authGuard] 
  },
  { 
    path: 'products', 
    component: ProductComponent,
    canActivate: [authGuard] 
  },
  { 
    path: 'signin', 
    component: SigninComponent 
  },
  { 
    path: '**', 
    redirectTo: '/home' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
