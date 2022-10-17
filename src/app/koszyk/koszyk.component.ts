import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SklepService } from '../sklep.service';

@Component({
  selector: 'app-koszyk',
  templateUrl: './koszyk.component.html',
  styleUrls: ['./koszyk.component.scss']
})
export class KoszykComponent implements OnInit, OnDestroy {
  public zawartoscKoszyka: string[] = [];
  private sub:Subscription;

   
  constructor(private sklep: SklepService ) { 
    this.sub = sklep.basket.subscribe( (wartoscBasket) => {
      this.zawartoscKoszyka = wartoscBasket;
      console.log(`sledzony koszyk z komponentu koszyk: ${wartoscBasket}`);
    })
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  ngOnInit(): void {
  }
  stop(): void {
    this.sub.unsubscribe();

  }
}
