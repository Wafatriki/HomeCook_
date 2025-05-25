import { Routes } from '@angular/router';
import { RegisterPage } from './pages/register/register.page';
import { RecipePage } from './pages/recipe/recipe.page';
import {HomePage} from "./pages/home/home.page";
import {HeaderComponent} from "./header/header.component";


export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'register', component: RegisterPage },
  { path: 'home', component: HomePage },
  { path: 'header', component: HeaderComponent },
  { path: 'recipe/:id', component: RecipePage },
  {
    path: 'favorites',
    loadComponent: () => import('./pages/favoritos/favoritos.page').then(m => m.FavoritosPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent)
  }
];
