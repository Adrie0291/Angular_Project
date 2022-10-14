import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaglowekComponent } from './naglowek/naglowek.component';
import { SosnaComponent } from './sosna/sosna.component';
import { PorscheComponent } from './porsche/porsche.component';

@NgModule({
  declarations: [
    AppComponent,
    NaglowekComponent,
    SosnaComponent,
    PorscheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
