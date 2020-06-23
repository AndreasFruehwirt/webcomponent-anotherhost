import { Component, OnInit } from '@angular/core';
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-bankpage-one',
  templateUrl: './bankpage-one.component.html',
  styleUrls: ['./bankpage-one.component.scss']
})
export class BankpageOneComponent implements OnInit {

  //dashboardUrl = environment.MFE_PAYMENT_URL + '/main-es2015.js'  + "?ts=" + new Date().getTime();
  dashboardUrl =  'http://localhost:4201/main.js'  + "?ts=" + new Date().getTime();

  constructor() {

  }

  ngOnInit(): void {
    let script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'http://localhost:4201/main.js.map'  + "?ts=" + new Date().getTime();
  }

}
