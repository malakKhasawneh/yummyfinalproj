import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { OfferService } from 'src/app/Services/offer.service';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-test-offers',
  templateUrl: './test-offers.component.html',
  styleUrls: ['./test-offers.component.css']
})
export class TestOffersComponent implements OnInit {
  

  ngOnInit(): void {
  }
  constructor(public modalService: NgbModal,public offers :OfferService,public share :SharedModule) {}
  
  @Input() restaurantID:number =0
  @Input() DiscountAmonut_:number =0
  @Input() Price:number =0
  @Input() MealName:string ='N/K'
  @Input() Validity:string ='N/K'
  @Input() restaurantName:string ='N/K'
  @Input() MealImg:string ='N/K'
  

 @Output() openProfile=new EventEmitter()
 
/*
  open() {
   this.share.flag2=true
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = 'Malak Khasawneh (:';
    console.log("name is " + this.offers.SelectedRest.restaurantName)
    console.log("disc is " + this.offers.SelectedOffers.DiscountAmonut_)
    console.log("price is " + this.offers.SelectedOffers.Price)

  }
  */
  showOffers(){
    this.openProfile.emit()
    this.offers.SelectedOffers={ // when we click on one of card we store the data of selected card in array in home services
     restaurantID:this.restaurantID,
     restaurantName:this.restaurantName,
     DiscountAmonut_:this.DiscountAmonut_,
     Price:this.Price,
     Validity:this.Validity,
    MealName:this.MealName,
    MealImg:this.MealImg
 
 }
 //console.log("disc is " + this.offers.SelectedOffers.DiscountAmonut_)
 //console.log("PRICE is " + this.offers.SelectedOffers.Price)
 console.log("ff"+this.restaurantID)
}
 //this.offers.GetAllOfferMeal(this.offers.SelectedOffers.restaurantID)
// this.router.navigate(['menu'])
  

}
@Component({
  selector: 'ngbd-modal-content',
  template: `
  <div class="modal-header">
    <h4 class="modal-title">
     {{offers.SelectedOffers.Price}}
    </h4>
    <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="modal-body">
    <p>Hello, {{name}}</p>
  </div>
  <div class="modal-footer"> 
  
   
  </div>
`
})


export class NgbdModalContent {
  @Input() name:string='n/k';
 
  constructor(public activeModal: NgbActiveModal,public offers :OfferService) {}
 
}