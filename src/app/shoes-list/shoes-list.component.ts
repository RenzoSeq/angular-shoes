import { Component } from '@angular/core';
import { ShoeCartService } from '../shoe-cart.service';
import { ShoesDataService } from '../shoes-data.service';
import { shoe } from './shoes';

@Component({
  selector: 'app-shoes-list',
  templateUrl: './shoes-list.component.html',
  styleUrls: ['./shoes-list.component.css']
})
export class ShoesListComponent {

shoes: shoe []= [
  /*{modelo : 'Vans Originales' ,
          marca : 'Vans',
          talle : '37a44',
          precio : 26000,
          stock : 10,
          imagen: "assets/img/vans.jpg",
          quantity:0 ,
        },
        {
          modelo : 'Nike airmax bordo/azu' ,
          marca : 'Nike',
          talle : '36a42',
          precio : 24500,
          stock : 7,
          imagen: "assets/img/nike.jpg",
          quantity:0 ,
        },
        {
          modelo : 'Adidas Forum low BB' ,
          marca : 'Adidas',
          talle : '39a45',
          precio : 29499,
          stock : 9,
          imagen: "assets/img/adidas.jpg",
          quantity:0 ,
        },
        {
          modelo : 'Puma Tricolor' ,
          marca : 'Puma',
          talle : '36a41',
          precio : 29499,
          stock : 0,
          imagen: "assets/img/puma.jpg",
          quantity:0 ,
        }, */
  
];

      
      constructor(private cart: ShoeCartService,
        private shoesDataService: ShoesDataService) {
      
      }

      ngOnInit(): void {
        this.shoesDataService.getAll()
        .subscribe(shoes => this.shoes = shoes);
      }

      aggCar(shoes: shoe): void{

        this.cart.aggCar(shoes);
        shoes.stock -= shoes.quantity;
        shoes.quantity = 0; 

      }

      maxShoe(m:string) {
        alert (m); 
      }

  


}