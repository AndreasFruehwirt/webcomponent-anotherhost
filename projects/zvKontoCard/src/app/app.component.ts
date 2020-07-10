import {Component, Input, OnInit} from '@angular/core';
import {KontenService, ProductData} from "./konten.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'zvKontoCard';
  konto:ProductData;

  @Input() productid:number;

  constructor(private kontenService:KontenService) {
    console.log('got intialized');

  }

  ngOnInit() {
    this.konto = this.kontenService.getKontoById(this.productid);
  }

}
