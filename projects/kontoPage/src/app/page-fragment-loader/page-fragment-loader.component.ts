import { Component, OnInit } from '@angular/core';
import {PageContextService} from "../page-context.service";
import {BehaviorSubject} from "rxjs";
import {PageContext} from "../table/page-context";
import {filter} from "rxjs/operators";
import {isDefined} from "@angular/compiler/src/util";
import {NgElement, WithProperties} from "@angular/elements";
import {PageFragmentContext} from "../table/page-fragment-context";

@Component({
  selector: 'app-page-fragment-loader',
  templateUrl: './page-fragment-loader.component.html',
  styleUrls: ['./page-fragment-loader.component.scss']
})
export class PageFragmentLoaderComponent implements OnInit {

  private pageContext: BehaviorSubject<PageContext>;
  frontend: NgElement & WithProperties<{pagefragmentcontext: PageFragmentContext}>;
  content:any;

  constructor(private pageContextService: PageContextService) {
    this.pageContext = this.pageContextService.getPageContext();
  }

  ngOnInit(): void {
    this.content = document.getElementById('fragment-content');
    this.pageContext.pipe(
      filter(value => isDefined(value))
    ).subscribe(value => {
      console.log(value);
      value.pageBodyEventHandler.pipe(
        filter(value => isDefined(value))
      ).subscribe((context:any) => {this.handlePageFragmentRouting(context,true);this.handlePageFragmentRouting(context, false);});
    });
  }

  handlePageFragmentRouting(context:any, twice:boolean) {
    let fragmentContext = new PageFragmentContext(context.url, context.tag);
    const script = document.createElement('script');
    script.defer = true;
    script.src = fragmentContext.url  + "/main.js?ts=" + new Date().getTime();
    twice && document.body.appendChild(script);
    this.frontend = document.createElement(context.tag) as NgElement & WithProperties<{pagefragmentcontext: PageFragmentContext}>;
    this.frontend.pagefragmentcontext = context;
    if (twice) this.content.innerHTML='';
    this.content.appendChild(this.frontend);
  }

}
