import { Injectable } from '@angular/core';
import {PageContext} from "./table/page-context";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PageContextService {

  private pageContext: BehaviorSubject<PageContext> = new BehaviorSubject(null);

  constructor() { }

  setPageContext(pageContext: PageContext) {
    console.log('pagecontext set');
    this.pageContext.next(pageContext);
  }

  getPageContext(): BehaviorSubject<PageContext> {
    return this.pageContext;
  }
}
