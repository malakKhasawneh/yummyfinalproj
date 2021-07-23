import { Component, EventEmitter,Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AllRestService } from 'src/app/Services/all-rest.service';
import { OfferService } from 'src/app/Services/offer.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { TestOffersComponent } from '../test-offers/test-offers.component';


@Component({
  selector: 'app-offers-card',
  templateUrl: './offers-card.component.html',
  styleUrls: ['./offers-card.component.css']
})
export class OffersCardComponent extends TestOffersComponent implements OnInit    {
 

 @Output() openOffer=new EventEmitter()

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
  
  constructor(public offers :OfferService,public allRest :AllRestService,public modalService: NgbModal,public share: SharedModule,private router:Router) { 
    super(modalService,offers,share)
  }

  ngOnInit(): void {
  }
  
  storeID(){
    this.offers.SelectedRest={
    restaurantID:this.restaurantID,
    restaurantName:this.restaurantName,
    }

    this.offers.GetAllOfferMeal(this.offers.SelectedRest.restaurantID)  

    this.showOffers()          
   // this.open()
   this.router.navigate(['offers'])
  
  }

 
  
}

