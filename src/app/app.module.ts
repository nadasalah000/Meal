import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { DuckComponent } from './duck/duck.component';
import { CurryComponent } from './curry/curry.component';
import { BeefComponent } from './beef/beef.component';
import { GoatComponent } from './goat/goat.component';
import { LambComponent } from './lamb/lamb.component';
import { TurkeyComponent } from './turkey/turkey.component';
import { PorkComponent } from './pork/pork.component';
import { FishComponent } from './fish/fish.component';
import { CrabComponent } from './crab/crab.component';
import { BaconComponent } from './bacon/bacon.component';
import { HamComponent } from './ham/ham.component';
import { PepperoniComponent } from './pepperoni/pepperoni.component';
import { SalamiComponent } from './salami/salami.component';
import { RibsComponent } from './ribs/ribs.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    DuckComponent,
    CurryComponent,
    BeefComponent,
    GoatComponent,
    LambComponent,
    TurkeyComponent,
    PorkComponent,
    FishComponent,
    CrabComponent,
    BaconComponent,
    HamComponent,
    PepperoniComponent,
    SalamiComponent,
    RibsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,AppRoutingModule,FormsModule,HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
