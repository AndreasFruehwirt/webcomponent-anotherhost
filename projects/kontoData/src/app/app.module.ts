import { BrowserModule } from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {Location} from "@angular/common";
import {createCustomElement} from "@angular/elements";
import { TableComponent } from './table/table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule {
  constructor(private injector: Injector, private location: Location) {
    //this.router.initialNavigation();
    //this.router.navigateByUrl(this.location.path(true));

  }

  ngDoBootstrap() {
    const elm = createCustomElement(AppComponent, {injector: this.injector});
    try {
      customElements.define('ce-kontodata', elm);
    } catch (e) {

    }
  }
}
