import { Injectable } from '@angular/core';

export interface ProductData {
  name: string;
  id: number;
}

@Injectable({
  providedIn: 'root'
})
export class KontenService {

  private konten: Array<ProductData> = [
    { name: 'FranzI Konto', id: 0},
    { name: 'SusiI Konto', id: 1},
    { name: 'SeppI Konto', id: 2},
    { name: 'Schorschi Konto', id: 3}
  ]

  constructor() { }

  getKonten():Array<ProductData> {
    return this.konten;
  }

  getKontoById(id:number):ProductData {
    return this.konten.find((konto)=>konto.id === id);
  }
}
