import { Component } from '@angular/core';
import { ApidataService } from '../apidata.service';

@Component({
  selector: 'app-bacon',
  templateUrl: './bacon.component.html',
  styleUrls: ['./bacon.component.css']
})
export class BaconComponent {
  dataRecipes:any[]=[];
  constructor(private _ApidataService:ApidataService){
    this._ApidataService.getbacon().subscribe( (data)=> {
      this.dataRecipes = data.recipes;
      console.log(data.recipes)
    })
  }
  
}
