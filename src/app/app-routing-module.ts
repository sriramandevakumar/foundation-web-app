import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoundationPage } from './pages/foundation-page/foundation-page';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    { path: '', component: FoundationPage }  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
