import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {ProductData, WertpapierService} from "../wertpapier.service";

declare interface DataContext {
  reloadData:BehaviorSubject<any>;
  inView:BehaviorSubject<any>;
}


@Component({
  selector: 'app-wertpapier',
  templateUrl: './wertpapier.component.html',
  styleUrls: ['./wertpapier.component.scss']
})
export class WertpapierComponent implements OnInit {

  @Output() data = new EventEmitter<Array<ProductData>>();
  @Input() dataContext:DataContext;

  constructor(private wertPapierService: WertpapierService) { }

  ngOnInit(): void {
    this.dataContext.reloadData.subscribe((value => {
      console.log('reload data' + value);
    }));
    this.dataContext.inView.subscribe((value => {
      console.log('getInview' + value);
    }))
  }

  ngAfterViewInit():void {
    console.log('should emit');
    setTimeout(() => this.data.next(this.wertPapierService.getWertpapier()));
  }

}
