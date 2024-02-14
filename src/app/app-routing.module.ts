import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'' , component:HomeComponent , title:'Meal'},
  {path:'duck' , component:DuckComponent , title:'Meal duck'},
  {path:'curry' , component:CurryComponent , title:'Meal curry'},
  {path:'beef' , component:BeefComponent , title:'Meal beef'},
  {path:'goat' , component:GoatComponent , title:'Meal goat'},
  {path:'lamb' , component:LambComponent , title:'Meal lamb'},
  {path:'turkey' , component:TurkeyComponent , title:'Meal turkey'},
  {path:'pork' , component:PorkComponent  , title:'Meal pork'},
  {path:'fish' , component:FishComponent , title:'Meal fish'},
  {path:'crab' , component:CrabComponent , title:'Meal crab'},
  {path:'bacon' , component:BaconComponent , title:'Meal bacon'},
  {path:'ham' , component:HamComponent , title:'Meal ham'},
  {path:'pepperoni' , component:PepperoniComponent , title:'Meal pepperoni'},
  {path:'salami' , component:SalamiComponent , title:'Meal salami'},
  {path:'ribs' , component:RibsComponent , title:'Meal ribs'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes , {scrollPositionRestoration:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
