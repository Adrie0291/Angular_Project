import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SklepService {
  public basket: BehaviorSubject<string[]> = new BehaviorSubject([] as string[]);
  //public koszyk: string[] = [];
  
  

  constructor(private http: HttpClient) { 

  }

  doKoszyka(id: string) { 
    // this.koszyk.push(id);
    //this.basket.next(this.koszyk);
    let kosz = this.basket.value;
    kosz.push(id);
    this.basket.next(kosz);
  }

  pobierzProdukty(): Observable<Produkt[]> {
    console.log('poczatek pobierania produktow ');
    return this.http.get<Produkt[]>(
      "https://634d06a7f5d2cc648e9a402e.mockapi.io/produkty"
      );
  }
}
export interface Produkt {
  id: string;
  name: string;
  cena: string;
  kategoria: number; 

}