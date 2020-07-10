import {AfterViewInit, Component, ElementRef, Inject, Input, OnInit, ViewChild} from '@angular/core';
import {CardData} from "../card-data.service";
import {DOCUMENT} from "@angular/common";
import {NgElement, WithProperties} from "@angular/elements";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, AfterViewInit {

  @Input() card: CardData;
  @ViewChild('cardcontainer', {read: ElementRef}) cardContainer: ElementRef;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    let element = this.document.createElement(this.card.tag) as NgElement & WithProperties<{ productid: number }>;
    element.productid = this.card.id;
    this.cardContainer.nativeElement.append(element);
  }


}
