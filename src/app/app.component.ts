import { Component } from '@angular/core';
import { Produkt, SklepService } from './sklep.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public ladujeDane = true; 
  public title = 'app';
  public pobraneProdukty: Produkt[];

  constructor(private sklep: SklepService ) {
    this.pobraneProdukty = [];
    console.log("przed zawolaniem metody")
    let produkty =  this.sklep.pobierzProdukty();
    console.log('Po zawolaniu metody')
    produkty.subscribe( (tablicaProduktow)=> {
      this.ladujeDane = false;
      this.pobraneProdukty = tablicaProduktow
      console.log('pobrano produkty')
      console.log(produkty);
        })
  }

  public dodajDoKoszyka(id: string) {
    console.log(id);
    this.sklep.doKoszyka(id);
  }
  public a = function(){return 9;};
  public b = () => {return 12;}

  public actualDate() {
    return Date.now();
  }
  //private niedziala = "cos";
  

}
//