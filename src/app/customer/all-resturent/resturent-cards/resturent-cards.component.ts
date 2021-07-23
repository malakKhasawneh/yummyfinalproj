import { Component,EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AllRestService } from 'src/app/Services/all-rest.service';


@Component({
  selector: 'app-resturent-cards',
  templateUrl: './resturent-cards.component.html',
  styleUrls: ['./resturent-cards.component.css']
})
export class ResturentCardsComponent implements OnInit {
  @Input() restaurantID:number =0 // it's mean the compnent will read input from other component 
  @Input() restID:number =0 // it's mean the compnent will read input from other component 
  @Input() restaurantName:string ='N/K'
  @Input() location:string ='N/K'
  @Input() phoneNumber:string ='N/K'
  @Input() cuisines:string ='N/K'
  @Input() avgRate:number =0
  @Input() restaurantCategoryID:number =0
  @Input() stauts:string ='N/K'
  @Input () testimonials:Array<object>=[]
  @Input () reviews  :Array<object>=[]
  @Input () menus  :Array<object>=[]
  @Input () restaurant_Employees:Array<object>=[]
  @Output() openProfile=new EventEmitter()
  constructor(public allRest :AllRestService,private spinner: NgxSpinnerService,private tostar :ToastrService) { }

  ngOnInit(): void {
  }
  showRestProfile(){
    this.openProfile.emit(); //to open the profile page
     this.allRest.SelectedRest={ // when we click on one of card we store the data of selected card in array in home services
      restaurantID:this.restaurantID,
      restaurantName:this.restaurantName,
    location:this.location,
    cuisines:this.cuisines,
    avgRate:this.avgRate,
    phoneNumber:this.phoneNumber,
    restaurantCategoryID:this.restaurantCategoryID,
    stauts:this.stauts,
    testimonials:this.testimonials,
    menus:this.menus,
    reviews:this.reviews,
    restaurant_Employees:this.restaurant_Employees
  }
  }
  

}
