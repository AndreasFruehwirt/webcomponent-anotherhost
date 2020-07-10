import {ElementRef, Inject, Injectable} from '@angular/core';
import { DOCUMENT } from "@angular/common";
import {BehaviorSubject} from "rxjs";
import {NgElement, WithProperties} from "@angular/elements";
import {CardDataService} from "./card-data.service";

declare interface CardComponent {
  type: 'zv' | 'wp';
  componentUrl: string;
  componentTag: string;
  componentDataTag: string;
}

declare interface DataContext {
  reloadData:BehaviorSubject<any>;
  inView:BehaviorSubject<any>;
}

declare interface DataElement {
  type: string;
  elementRef: NgElement & WithProperties<{dataContext: DataContext}>;
}

@Injectable({
  providedIn: 'root'
})
export class CardComponentLoaderService {

  private datacontainer: ElementRef;

  private cardComponents: Array<CardComponent> = [
    {type: 'zv', componentUrl: 'http://localhost:4206/', componentTag: 'ce-zvkontocard', componentDataTag: 'ce-zvdatakontocard'},
    {type: 'wp', componentUrl: 'http://localhost:4205/', componentTag: 'ce-wpcard', componentDataTag: 'ce-wpdatacard'}
  ];

  private dataElements: DataElement[] = [];


  constructor(@Inject(DOCUMENT) private document: Document, private cardDataService: CardDataService) { }

  getCardComponents(): Array<CardComponent> {
    return this.cardComponents;
  }

  setDataContainer(element:ElementRef){
    this.datacontainer = element;
    this.registerComponents();
  }

  private dataContextFactory():DataContext {
    return {
      reloadData: new BehaviorSubject<any>(null),
      inView: new BehaviorSubject<any>(null)
    }
  }

  registerComponents() {
    this.cardComponents.forEach(cardComponent => {
      const script = this.document.createElement('script');
      script.defer = true;
      script.src = cardComponent.componentUrl + 'main.js?ts=' + new Date().getTime();
      this.document.body.appendChild(script);
      const element = this.document.createElement(cardComponent.componentDataTag) as NgElement & WithProperties<{dataContext: DataContext}>;
      element.dataContext = this.dataContextFactory();
      element.addEventListener('data', (event$:CustomEvent)=> this.cardDataService.appendArray(event$.detail, cardComponent.componentTag));
      this.dataElements.push({type: cardComponent.type, elementRef: element});
      this.datacontainer.nativeElement.append(element);
    })
  }
}
