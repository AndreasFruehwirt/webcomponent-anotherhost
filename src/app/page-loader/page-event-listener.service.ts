import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {PageFragmentService} from "./page-fragment.service";
import {Location} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class PageEventListenerService {
  bus$: BehaviorSubject<any>;
  pageFragmentSubscriber$: BehaviorSubject<any>;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private pageFragmentService: PageFragmentService,
              private location: Location) {
    this.bus$=(window as any).pageEventHandler.subscribe(value => this.navigate(value));
    //this.pageFragmentSubscriber$=(window as any).pageBodyEventHandler.subscribe(value => this.setPagefragment(value));
    console.log('From Listener:' + this.location.path());
    route.queryParams.subscribe(params => {
      console.debug('params', params);
    });
    this.location.onUrlChange(((url, state) => {
      console.log(url);
      console.log(state)
    } ))
  }

  private navigate(value:any) {
    console.log(value);
    console.log('From Listener:' + this.location.path());
    this.router.navigateByUrl(this.location.path());
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: value,
      queryParamsHandling: 'merge'
    })
    if(value) {
      this.setPagefragment(value.service);
    }

  }

  private setPagefragment(value:string) {
    (window as any).pageBodyEventHandler.next(this.pageFragmentService.getDataFromBundle(value));
  }

}
