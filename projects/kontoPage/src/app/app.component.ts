import {Component, Input, OnInit} from '@angular/core';
import {PageContext} from "./table/page-context";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @Input() pagecontext:PageContext;

  constructor() {
  }

  title = 'kontoPage';

  ngOnInit() {
    this.pagecontext.pageEventHandler.next('supercooler text'  + Math.random());
  }
}
