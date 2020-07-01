import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageFragmentService {

  uiBundles = {
    chemicals: {url: 'http://localhost:4203', tag: 'ce-kontodata'},
    adress_input: {url: 'http://localhost:4204', tag: 'ce-kontoadressform'}
  }

  constructor() { }

  getDataFromBundle(bundle:string):any {
    return this.uiBundles[bundle];
  }
}
