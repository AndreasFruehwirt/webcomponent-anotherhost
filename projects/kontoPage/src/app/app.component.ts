import {Component, Inject, Input, OnDestroy, OnInit} from '@angular/core';
import {PageContext} from "./table/page-context";
import {PageContextService} from "./page-context.service";
import {ActivatedRoute, Router, Routes} from "@angular/router";
import {EmptyComponentComponent} from "./empty-component/empty-component.component";

const routes: Routes = [
  { path: 'banknav-two', component: EmptyComponentComponent },
  { path: '', redirectTo: '/banknav-two', pathMatch: 'full' }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  @Input() pagecontext:PageContext;

  constructor(private pageContextService: PageContextService,
              private router:Router,
              private route:ActivatedRoute) {

  }

  title = 'kontoPage';
  activeButton:string;

  ngOnInit() {
    //this.pagecontext.pageEventHandler.next('supercooler text'  + Math.random());
    this.pageContextService.setPageContext(this.pagecontext);
    if (this.route.snapshot.queryParams['service']) {
      this.navigate(this.route.snapshot.queryParams['service']);
    } else {
      this.navigate('chemicals');
    }
    this.pagecontext.pageEventHandler.next({service:'chemicals'});

  }

  handleClick(value: string) {
    this.activeButton = value;
    this.navigate(value);
  }

  navigate(service:string) {
    /*this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        service: service
      },
      queryParamsHandling: 'merge'
    });*/
    this.pagecontext.pageEventHandler.next({service:service});
    this.activeButton = service;
  }

  ngOnDestroy() {
    //this.router.resetConfig(routes);
  }
}

