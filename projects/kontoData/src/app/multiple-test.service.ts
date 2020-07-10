import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MultipleTestService {

  constructor() {
    console.log('This is from Multiple TestService ' + Math.random());
  }
}
