import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { About } from './pages/about/about';
import { BankDetails } from './pages/bank-details/bank-details';
import { Faq } from './pages/faq/faq';
import { IndependenceDayCelebration } from './pages/independence-day-celebration/independence-day-celebration';
import { GetInTouch } from './pages/get-in-touch/get-in-touch';
export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'about', component: About },
  { path: 'bank-details', component: BankDetails },
  { path: 'faq', component: Faq },
  { path: 'ind-day', component: IndependenceDayCelebration },
  { path: 'get-in-touch', component: GetInTouch }
];
