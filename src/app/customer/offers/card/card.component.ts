import { Component, Input, OnInit } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() restaurantID:number =0
  @Input() DiscountAmonut_:number =0
  @Input() Price:number =0
  @Input() MealName:string ='N/K'
  @Input() Validity:string ='N/K'
  @Input() RestaurantName:string ='N/K'
  @Input() MealImg:string ='N/K'
  currentNumber = 0;
  constructor(public share :SharedModule) { }

  ngOnInit(): void {
  }
  increment () {
    this.currentNumber++;
  }
  
   decrement () {
    this.currentNumber--;
  }

}
