import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmptyComponentComponent} from "./empty-component/empty-component.component";

const routes: Routes = [
  { path: 'banknav-two', component: EmptyComponentComponent },
  { path: '', redirectTo: '/banknav-two', pathMatch: 'full' }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: "reload"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
