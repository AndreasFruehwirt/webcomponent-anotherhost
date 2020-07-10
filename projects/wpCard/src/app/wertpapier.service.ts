import { Injectable } from '@angular/core';

export interface ProductData {
  name: string;
  id: number;
}

@Injectable({
  providedIn: 'root'
})
export class WertpapierService {

  private wertpapiere: Array<ProductData> = [
    { name: 'FranzI Wertpapier', id: 0},
    { name: 'SusiI Wertpapier', id: 1},
    { name: 'SeppI Wertpapier', id: 2},
    { name: 'Schorschi Wertpapier', id: 3}
  ]
  constructor() { }

  getWertpapier():Array<ProductData> {
    return this.wertpapiere;
  }

  getWertpapierById(id:number):ProductData {
    return this.wertpapiere.find((wertpapier)=>wertpapier.id === id);
  }
}
