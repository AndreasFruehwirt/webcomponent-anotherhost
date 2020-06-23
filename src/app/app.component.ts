import {Component, OnInit} from '@angular/core';
import {HostLocationService} from "./host-location.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'banking-app';

  constructor(private hostLocationService: HostLocationService) {
  }

  ngOnInit() {
   this.hostLocationService.handleNavigation();
  }
}
