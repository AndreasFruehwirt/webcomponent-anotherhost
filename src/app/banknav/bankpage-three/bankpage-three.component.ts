import {AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {
  SwiperComponent,
  SwiperConfigInterface,
  SwiperDirective,
  SwiperPaginationInterface,
  SwiperScrollbarInterface
} from "ngx-swiper-wrapper";
import {CardComponentLoaderService} from "./card-component-loader.service";
import {CardData, CardDataService} from "./card-data.service";
import {BehaviorSubject} from "rxjs";
import {filter} from "rxjs/operators";
import {isDefined} from "@angular/compiler/src/util";

@Component({
  selector: 'app-bankpage-three',
  templateUrl: './bankpage-three.component.html',
  styleUrls: ['./bankpage-three.component.scss']
})
export class BankpageThreeComponent implements OnInit, AfterViewInit {

  activatedCard: String;
  public show: boolean = true;
  @ViewChild(SwiperComponent, { static: false }) componentRef?: SwiperComponent;
  @ViewChild(SwiperDirective, { static: false }) directiveRef?: SwiperDirective;
  @ViewChild('datacontainer', {read: ElementRef}) dataContainer: ElementRef;


  public slides:CardData[]  = [];

  public config: SwiperConfigInterface = {
    a11y: true,
    direction: 'horizontal',
    slidesPerView: 3,
    keyboard: true,
    mousewheel: true,
    scrollbar: false,
    navigation: true,
    pagination: false,
    threshold: 50,
    spaceBetween: 20,
    centeredSlides: false,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slidesOffsetBefore: 20,
    slidesOffsetAfter: 20,
    loop: true
  };

  public type: string = 'directive';

  public disabled: boolean = false;

  private cardData$: BehaviorSubject<CardData>;


  private scrollbar: SwiperScrollbarInterface = {
    el: '.swiper-scrollbar',
    hide: false,
    draggable: true
  };

  private pagination: SwiperPaginationInterface = {
    el: '.swiper-pagination',
    clickable: true,
    hideOnClick: false
  };

  constructor(private cardComponentLoader: CardComponentLoaderService,
              private elRef:ElementRef,
              private cardDataService: CardDataService) {
    let element = this.elRef.nativeElement;
    console.log(element);
  }

  ngOnInit(): void {
    this.cardData$ = this.cardDataService.getCardData();
    this.cardData$.pipe(
      filter((data) => isDefined(data))
    ).subscribe((data)=>{
      console.log(data)
      this.addCards(data);
    });
  }

  private addCards(card:CardData):void {
    this.slides.push(card);
  }

  ngAfterViewInit() {

    console.log(this.dataContainer.nativeElement);
    this.cardComponentLoader.setDataContainer(this.dataContainer);
  }

  navigate(location:string):void {

  }

  public toggleType(): void {
    this.type = (this.type === 'component') ? 'directive' : 'component';
  }

  public toggleDisabled(): void {
    this.disabled = !this.disabled;
  }

  public toggleDirection(): void {
    this.config.direction = (this.config.direction === 'horizontal') ? 'vertical' : 'horizontal';
  }

  public toggleSlidesPerView(): void {
    if (this.config.slidesPerView !== 1) {
      this.config.slidesPerView = 1;
    } else {
      this.config.slidesPerView = 2;
    }
  }

  public toggleOverlayControls(): void {
    if (this.config.navigation) {
      this.config.scrollbar = false;
      this.config.navigation = false;

      this.config.pagination = this.pagination;
    } else if (this.config.pagination) {
      this.config.navigation = false;
      this.config.pagination = false;

      this.config.scrollbar = this.scrollbar;
    } else {
      this.config.scrollbar = false;
      this.config.pagination = false;

      this.config.navigation = true;
    }

    if (this.type === 'directive' && this.directiveRef) {
      this.directiveRef.setIndex(0);
    } else if (this.type === 'component' && this.componentRef && this.componentRef.directiveRef) {
      this.componentRef.directiveRef.setIndex(0);
    }
  }

  public toggleKeyboardControl(): void {
    this.config.keyboard = !this.config.keyboard;
  }

  public toggleMouseWheelControl(): void {
    this.config.mousewheel = !this.config.mousewheel;
  }

  public onIndexChange(index: number): void {
    console.log('Swiper index: ', index);
  }

  public onSwiperEvent(event: string): void {
    console.log('Swiper event: ', event);
  }

  public addCard(): void {
    //this.slides.push('New card ' + Math.random());
  }

}
