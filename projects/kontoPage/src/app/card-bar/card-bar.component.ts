import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from "@angular/common";
import {PageContextService} from "../page-context.service";
import {PageContext} from "../table/page-context";
import {BehaviorSubject, iif} from "rxjs";
import {filter} from "rxjs/operators";
import {isDefined} from "@angular/compiler/src/util";

@Component({
  selector: 'app-card-bar',
  templateUrl: './card-bar.component.html',
  styleUrls: ['./card-bar.component.scss']
})
export class CardBarComponent implements OnInit {

  activatedCard: String;
  private pageContext: BehaviorSubject<PageContext>;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private pageContextService: PageContextService) {
    this.pageContext = this.pageContextService.getPageContext();
  }

  ngOnInit(): void {
    console.log(this.route.snapshot.queryParams['city']);
    if (this.route.snapshot.queryParams['city']) {
      this.navigate(this.route.snapshot.queryParams['city']);
    } else {
      this.navigate('Linz');
    }
    /*this.pageContext.pipe(
      filter(value => isDefined(value))
    ).subscribe(value => {
      console.log(value);
      value.pageEventHandler.next({lustigerKasperl:'jawooiii'})
    });*/

  }

  navigate(city:string) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        city: city
      },
      queryParamsHandling: 'merge'
    })
    this.activatedCard = city;
  }

}
