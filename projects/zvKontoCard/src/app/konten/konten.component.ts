import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {KontenService, ProductData} from "../konten.service";
import {BehaviorSubject} from "rxjs";

declare interface DataContext {
  reloadData:BehaviorSubject<any>;
  inView:BehaviorSubject<any>;
}

@Component({
  selector: 'app-konten',
  templateUrl: './konten.component.html'
})
export class KontenComponent implements OnInit, AfterViewInit {

  @Output() data = new EventEmitter<Array<ProductData>>();
  @Input() dataContext:DataContext;

  constructor(private kontenService: KontenService) {
    console.log('got intialized');
  }

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
    setTimeout(() => this.data.next(this.kontenService.getKonten()));
  }

  emitData():void {
    this.data.emit(this.kontenService.getKonten());
  }

}
