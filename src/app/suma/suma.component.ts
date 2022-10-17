import { Component, Input, OnInit } from '@angular/core';
import { KalkulatorService } from '../kalkulator.service';
import { MultiService } from '../multi.service';


@Component({
  selector: 'app-suma',
  templateUrl: './suma.component.html',
  styleUrls: ['./suma.component.scss'],
  providers:[MultiService] 
})
export class SumaComponent implements OnInit {

@Input()
  public liczba1!: number;
@Input()
  public liczba2!: number;
  public tryb = 0;//tryb: number = 0; nie musimy okreslac typu, bo jest on dynamicznie ustawiany
  
  public tablica = [{wartosc: 1}, {wartosc: 2}]
  
  
  constructor(public ks: KalkulatorService, public ms: MultiService) {
    // ms.test();
   }

  ngOnInit(): void {
  } 
  public ustawTryb(tryb: number): void {
    this.tryb = tryb; 
  }
  public zmienTablice(): void{
    this.tablica[1].wartosc++;
  }

  reset(mode = 0): void{
    this.tryb = mode;
  }

}
