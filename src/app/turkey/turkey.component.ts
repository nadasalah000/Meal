import { Component } from '@angular/core';
import { ApidataService } from '../apidata.service';

@Component({
  selector: 'app-turkey',
  templateUrl: './turkey.component.html',
  styleUrls: ['./turkey.component.css']
})
export class TurkeyComponent {
  dataRecipes:any[]=[];
  constructor(private _ApidataService:ApidataService){
    this._ApidataService.getturkey().subscribe( (data)=> {
      this.dataRecipes = data.recipes;
      console.log(data.recipes)
    })
  }
}
