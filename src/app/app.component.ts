import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'app';

  constructor() {
  }
  public a = function(){return 9;};
  public b = () => {return 12;}

  public actualDate() {
    return Date.now();
  }
  //private niedziala = "cos";
  

}
