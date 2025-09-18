import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { FoundationPage } from './pages/foundation-page/foundation-page';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { CarouselImage } from './pages/carousel-image/carousel-image';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePage } from './pages/home-page/home-page';
import { HeaderComponent } from './pages/header-component/header-component';
import { FooterComponent } from './pages/footer-component/footer-component';

@NgModule({
  declarations: [
    App,
    FoundationPage ,
    CarouselImage,
    HomePage,
    HeaderComponent,
    FooterComponent/// Removed FoundationPage from declarations
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    NgbModule,
    SlickCarouselModule,
    BrowserAnimationsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule { }
