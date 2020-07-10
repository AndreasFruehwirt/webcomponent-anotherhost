import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

export interface CardData {
  name: string;
  id: number;
  tag: string;
}

@Injectable({
  providedIn: 'root'
})
export class CardDataService {

  private cardData:Array<CardData> = new Array<CardData>();
  private cardData$:BehaviorSubject<CardData> = new BehaviorSubject<CardData>(null);

  constructor() { }

  appendArray(data:CardData[], tag:string):void{
    data.forEach((data)=> {
      this.enrichDataWithTag(data,tag);
      this.cardData$.next(data)
    });
    this.cardData = this.cardData.concat(data);
    console.log('retrieved Data');
    console.log(this.cardData);
  }

  enrichDataWithTag(data:CardData, tag:string):void {
    data.tag = tag;
  }

  getCardData():BehaviorSubject<CardData> {
    return this.cardData$;
  }



}
