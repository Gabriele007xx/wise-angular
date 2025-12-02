import { Routes } from '@angular/router';
import { Home } from './home/home';

export const routes: Routes = [ {path: '', component: Home }, { path: 'register', loadComponent: ()=>import('./form-register/form-register').then(m => m.FormRegister)}, { path: 'login', loadComponent: ()=>import('./form-login/form-login').then(m => m.FormLogin)}, { path: 'dashboard', loadComponent: ()=>import('./tabella/tabella').then(m => m.Tabella)} ];