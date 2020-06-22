import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

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

@NgModule({
  declarations: [
    AppComponent,
    BanknavComponent,
    BankpageOneComponent,
    BankpageTwoComponent,
    BankpageThreeComponent
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
    LazyElementsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
