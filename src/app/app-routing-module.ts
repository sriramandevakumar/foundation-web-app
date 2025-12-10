import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { About } from './pages/about/about';
import { BankDetails } from './pages/bank-details/bank-details';
import { HeaderComponent } from './pages/header-component/header-component';
export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'about', component: About },
  { path: 'bank-details', component: BankDetails },
];
