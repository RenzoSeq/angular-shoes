import { Component,  EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-input-cantidad',
  templateUrl: './input-cantidad.component.html',
  styleUrls: ['./input-cantidad.component.css']
})
export class InputCantidadComponent {

  constructor ()  {
  }
 
  @Input()
  
  quantity!: number;

  @Input()
  max!: number;

  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  maxShoe: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
  }

  upQuantity(): void {
    if(this.quantity < this.max){
    this.quantity++;
    this.quantityChange.emit(this.quantity);
  }    
  else
     this.maxShoe.emit("Maximo de stock alcanzado");
}
  
  downQuantity(): void {
    if(this.quantity > 0)
    this.quantity--;
    this.quantityChange.emit(this.quantity);
  }

}
