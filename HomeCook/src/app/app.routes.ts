import { Routes } from '@angular/router';
import { RegisterPage } from './pages/register/register.page';
import { RecipePage } from './pages/recipe/recipe.page';
import {HomePage} from "./pages/home/home.page";
import {HeaderComponent} from "./header/header.component";
import {FavoritosPage} from './pages/favoritos/favoritos.page';


export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'register', component: RegisterPage },
  { path: 'home', component: HomePage },
  { path: 'header', component: HeaderComponent },
  { path: 'recipe/:id', component: RecipePage },
  { path: 'favoritos', component: FavoritosPage }
];
