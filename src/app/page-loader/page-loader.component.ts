import {Component, OnDestroy, OnInit} from '@angular/core';
import {PageContext} from "./page-context";
import {NgElement, WithProperties} from "@angular/elements";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-page-loader',
  templateUrl: './page-loader.component.html',
  styleUrls: ['./page-loader.component.scss']
})
export class PageLoaderComponent implements OnInit, OnDestroy {

  frontend: NgElement & WithProperties<{pagecontext: PageContext}>;
  content:any;
  bus$: BehaviorSubject<any>;

  constructor() {

  }

  ngOnInit() {
    this.bus$=(window as any).pageEventHandler.subscribe(value => console.log(value));
    let context = new PageContext('TestBody', 23455);
    const script = document.createElement('script');
    script.defer = true;
    script.src = 'http://localhost:4202/main.js'  + "?ts=" + new Date().getTime();
    document.body.appendChild(script);
    this.frontend = document.createElement('ce-kontopage') as NgElement & WithProperties<{pagecontext: PageContext}>;;
    this.frontend.pagecontext = context;
    this.content = document.getElementById('content');
    this.content.appendChild(this.frontend);
  }

  ngOnDestroy() {
    console.log('destroyed');
    this.content.innerHTML='';
    this.bus$.unsubscribe();
  }

}
