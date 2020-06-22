import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BankpageOneComponent} from "./banknav/bankpage-one/bankpage-one.component";
import {BankpageTwoComponent} from "./banknav/bankpage-two/bankpage-two.component";
import {BankpageThreeComponent} from "./banknav/bankpage-three/bankpage-three.component";


const routes: Routes = [
  {path: 'banknav-one', component: BankpageOneComponent},
  {path: 'banknav-two', component: BankpageTwoComponent},
  {path: 'banknav-three', component: BankpageThreeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
