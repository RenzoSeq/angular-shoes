import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {shoe} from './shoes-list/shoes';


@Injectable({
  providedIn: 'root'
})
export class ShoeCartService {

private _shoeList:shoe[] = [];
shoeList: BehaviorSubject<shoe[]> =new BehaviorSubject(this._shoeList);
 

constructor() { }

  aggCar(shoes: shoe ){
    let item :shoe | undefined 
    item =this._shoeList.find ((v1)=> v1.modelo == shoes.modelo);
    if (!item){
      this._shoeList.push({ ... shoes});
    } else{
      item.quantity += shoes.quantity;
    }
    console.log(this._shoeList);
    this.shoeList.next(this._shoeList);
    }

  
}
