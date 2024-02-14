import { Component } from '@angular/core';
import { ApidataService } from '../apidata.service';

@Component({
  selector: 'app-crab',
  templateUrl: './crab.component.html',
  styleUrls: ['./crab.component.css']
})
export class CrabComponent {
  dataRecipes:any[]=[];
  constructor(private _ApidataService:ApidataService){
    this._ApidataService.getcrab().subscribe( (data)=> {
      this.dataRecipes = data.recipes;
      console.log(data.recipes)
    })
  }
}
