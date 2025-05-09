import { Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { RegisterPage } from './pages/register/register.page';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home.page').then(m => m.HomePage)
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/register/register.page').then(m => m.RegisterPage)
  }
];
