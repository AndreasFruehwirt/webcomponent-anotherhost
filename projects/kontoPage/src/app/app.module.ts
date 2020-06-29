import { BrowserModule } from '@angular/platform-browser';
import {InjectionToken, Injector, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {createCustomElement} from "@angular/elements";
import { TableComponent } from './table/table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { CardBarComponent } from './card-bar/card-bar.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatCardModule} from "@angular/material/card";
import {MatMenuModule} from "@angular/material/menu";
import {MatRippleModule} from "@angular/material/core";
import {APP_BASE_HREF, Location} from "@angular/common";
import {getBaseLocation} from "./base-location";
import { EmptyComponentComponent } from './empty-component/empty-component.component';
import {Router} from "@angular/router";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import { PageFragmentLoaderComponent } from './page-fragment-loader/page-fragment-loader.component';

const baseref =  {
    provide: APP_BASE_HREF,
    useFactory: getBaseLocation
  };

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    CardBarComponent,
    EmptyComponentComponent,
    PageFragmentLoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatRippleModule,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [

  ],
  bootstrap: []
})
export class AppModule {

  constructor(private injector: Injector, private router: Router, private location: Location) {
    this.router.initialNavigation();
    this.router.navigateByUrl(this.location.path(true));

  }

  ngDoBootstrap() {
    const elm = createCustomElement(AppComponent, {injector: this.injector});
    try {
      customElements.define('ce-kontopage', elm);
    } catch (e) {

    }
  }
}
