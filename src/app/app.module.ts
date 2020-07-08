import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NgZone} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BanknavComponent } from './banknav/banknav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { BankpageOneComponent } from './banknav/bankpage-one/bankpage-one.component';
import { BankpageTwoComponent } from './banknav/bankpage-two/bankpage-two.component';
import { BankpageThreeComponent } from './banknav/bankpage-three/bankpage-three.component';
import {LazyElementsModule} from "@angular-extensions/elements";
import {BehaviorSubject} from "rxjs";
import { PageLoaderComponent } from './page-loader/page-loader.component';
import {SwiperModule} from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import {MatCardModule} from "@angular/material/card";
import {MatMenuModule} from "@angular/material/menu";
import {MatRippleModule} from "@angular/material/core";

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  observer: true,
  direction: 'horizontal',
  threshold: 50,
  spaceBetween: 5,
  slidesPerView: 1,
  centeredSlides: true
};


@NgModule({
  declarations: [
    AppComponent,
    BanknavComponent,
    BankpageOneComponent,
    BankpageTwoComponent,
    BankpageThreeComponent,
    PageLoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatMenuModule,
    MatRippleModule,
    MatToolbarModule,
    MatButtonModule,
    LazyElementsModule,
    SwiperModule
  ],
  providers: [ {
    provide: SWIPER_CONFIG,
    useValue: DEFAULT_SWIPER_CONFIG
  }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
  constructor(private ngZone: NgZone) {
    (window as any).ngZone = this.ngZone; // store ngZone reference on the window object
    (window as any).pageEventHandler = new BehaviorSubject(null);
    (window as any).pageBodyEventHandler = new BehaviorSubject(null);
    (window as any).productEventHandler = new BehaviorSubject(null);

  }
}
