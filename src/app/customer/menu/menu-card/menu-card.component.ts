import { Component, Input, OnInit } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.css']
})
export class MenuCardComponent implements OnInit {
  @Input() restaurantID:number =0
  @Input() Category_:string ='N/K'
  @Input() Price:number =0
  @Input() description_:string ='N/K'
  @Input() MealName:string ='N/K'
  @Input() MealImg:string ='N/K'
  @Input() Quantity_:number =0
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
