import { Component } from '@angular/core';
import { ApidataService } from '../apidata.service';

@Component({
  selector: 'app-salami',
  templateUrl: './salami.component.html',
  styleUrls: ['./salami.component.css']
})
export class SalamiComponent {
  dataRecipes:any[]=[];
  constructor(private _ApidataService:ApidataService){
    this._ApidataService.getsalami().subscribe( (data)=> {
      this.dataRecipes = data.recipes;
      console.log(data.recipes)
    })
  }
}
