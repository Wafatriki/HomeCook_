import { Routes } from '@angular/router';
import { RegisterPage } from './pages/register/register.page';
import { RecipePage } from './pages/recipe/recipe.page';


export const routes: Routes = [
  { path: '', redirectTo: 'register', pathMatch: 'full' },
  { path: 'register', component: RegisterPage },
  { path: 'recipe', component: RecipePage }
];
