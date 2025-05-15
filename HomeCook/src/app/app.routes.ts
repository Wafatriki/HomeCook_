import { Routes } from '@angular/router';
import { RegisterPage } from './pages/register/register.page';
import { RecipePage } from './pages/recipe/recipe.page';
import {HomePage} from "./pages/home/home.page";
import {HeaderComponent} from "./header/header.component";


export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'register', component: RegisterPage },
  { path: 'recipe', component: RecipePage },
  { path: 'home', component: HomePage },
  { path: 'header', component: HeaderComponent },

];
