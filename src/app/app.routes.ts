import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { FormRegister } from './components/form-register/form-register';
import { FormLogin } from './components/form-login/form-login';
import { Tabella } from './components/tabella/tabella';

export const routes: Routes = [ {path: '', component: Home },
     { path: 'register', component: FormRegister},
      { path: 'login', component: FormLogin}, 
      { path: 'dashboard', component: Tabella} ];