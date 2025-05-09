import { Routes } from '@angular/router';
import { RegisterPage } from './pages/register/register.page';

export const routes: Routes = [
  { path: '', redirectTo: 'register', pathMatch: 'full' },
  { path: 'register', component: RegisterPage }
];
