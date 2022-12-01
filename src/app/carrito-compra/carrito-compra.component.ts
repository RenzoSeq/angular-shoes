import { Component } from '@angular/core';
import { ShoeCartService } from '../shoe-cart.service';
import { Observable } from 'rxjs';
import { shoe } from '../shoes-list/shoes';
@Component({
  selector: 'app-carrito-compra',
  templateUrl: './carrito-compra.component.html',
  styleUrls: ['./carrito-compra.component.css']
})
export class CarritoCompraComponent {


  shoeList$: Observable<shoe[]>;

  constructor(private cart: ShoeCartService){
   
    this.shoeList$ = cart.shoeList.asObservable();
    console.log(this.shoeList$);
}
ngOnInit():void{

}
}