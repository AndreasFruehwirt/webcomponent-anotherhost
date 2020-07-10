import {Component, Input, OnInit} from '@angular/core';
import {ProductData, WertpapierService} from "./wertpapier.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'wpCard';
  @Input() productid:number;

  wertpapier:ProductData;

  constructor(private wertpapierService: WertpapierService) {
  }

  ngOnInit() {
    this.wertpapier = this.wertpapierService.getWertpapierById(this.productid);
  }

}
