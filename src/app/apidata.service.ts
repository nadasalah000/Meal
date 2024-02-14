import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApidataService {

  constructor(private _HttpClient:HttpClient) { }

  getduck(): Observable<any>{
    return this._HttpClient.get(`https://forkify-api.herokuapp.com/api/search?q=duck`);
  }
  getcurry(): Observable<any>{
    return this._HttpClient.get(`https://forkify-api.herokuapp.com/api/search?q=curry`);
  }
  getbeef(): Observable<any>{
    return this._HttpClient.get(`https://forkify-api.herokuapp.com/api/search?q=beef`);
  }
  getgoat(): Observable<any>{
    return this._HttpClient.get(`https://forkify-api.herokuapp.com/api/search?q=goat`);
  }
  getlamb(): Observable<any>{
    return this._HttpClient.get(`https://forkify-api.herokuapp.com/api/search?q=lamb`);
  }
  getturkey(): Observable<any>{
    return this._HttpClient.get(`https://forkify-api.herokuapp.com/api/search?q=turkey`);
  }
  getpork(): Observable<any>{
    return this._HttpClient.get(`https://forkify-api.herokuapp.com/api/search?q=pork`);
  }
  getfish(): Observable<any>{
    return this._HttpClient.get(`https://forkify-api.herokuapp.com/api/search?q=fish`);
  }
  getcrab(): Observable<any>{
    return this._HttpClient.get(`https://forkify-api.herokuapp.com/api/search?q=crab`);
  }
  getbacon(): Observable<any>{
    return this._HttpClient.get(`https://forkify-api.herokuapp.com/api/search?q=bacon`);
  }
  getham(): Observable<any>{
    return this._HttpClient.get(`https://forkify-api.herokuapp.com/api/search?q=ham`);
  }
  getpepperoni(): Observable<any>{
    return this._HttpClient.get(`https://forkify-api.herokuapp.com/api/search?q=pepperoni`);
  }
  getsalami(): Observable<any>{
    return this._HttpClient.get(`https://forkify-api.herokuapp.com/api/search?q=salami`);
  }
  getribs(): Observable<any>{
    return this._HttpClient.get(`https://forkify-api.herokuapp.com/api/search?q=ribs`);
  }
}
