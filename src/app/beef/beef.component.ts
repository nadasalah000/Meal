import { Component } from '@angular/core';
import { ApidataService } from '../apidata.service';

@Component({
  selector: 'app-beef',
  templateUrl: './beef.component.html',
  styleUrls: ['./beef.component.css']
})
export class BeefComponent {
  dataRecipes:any[]=[];
  constructor(private _ApidataService:ApidataService){
    this._ApidataService.getbeef().subscribe( (data)=> {
      this.dataRecipes = data.recipes;
      console.log(data.recipes)
    })
  }
}
