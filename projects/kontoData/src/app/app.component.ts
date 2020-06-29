import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'kontoData';

  @Input() pagefragmentcontext:any;

  constructor() {

  }


  ngOnInit() {
    console.log('frommm pagecontext');
    console.log(this.pagefragmentcontext);
  }


}
