import { BrowserModule } from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import {Location} from "@angular/common";
import {createCustomElement} from "@angular/elements";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatCardModule} from "@angular/material/card";
import {MatMenuModule} from "@angular/material/menu";
import {MatRippleModule} from "@angular/material/core";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import { WertpapierComponent } from './wertpapier/wertpapier.component';

@NgModule({
  declarations: [
    AppComponent,
    WertpapierComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatMenuModule,
    MatRippleModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule {
  constructor(private injector: Injector, private location: Location) {


  }


  ngDoBootstrap() {
    const card = createCustomElement(AppComponent, {injector: this.injector});
    const data = createCustomElement(WertpapierComponent, {injector: this.injector});
    try {
      customElements.define('ce-wpcard', card);
      customElements.define('ce-wpdatacard', data);
    } catch (e) {

    }
  }
}
