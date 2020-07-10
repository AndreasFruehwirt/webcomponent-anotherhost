import {Component, Input, OnInit} from '@angular/core';
import {MultipleTestService} from "./multiple-test.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'kontoData';

  @Input() pagefragmentcontext:any;

  constructor(private multipleTestService: MultipleTestService) {
    console.log('got initialized newly ===================>');
  }


  ngOnInit() {
    console.log('frommm pagecontext');
    console.log(this.pagefragmentcontext);
  }


}
