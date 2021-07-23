import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { OfferService } from 'src/app/Services/offer.service';

@Component({
  selector: 'app-offers-pop-menu',
  templateUrl: './offers-pop-menu.component.html',
  styleUrls: ['./offers-pop-menu.component.css']
})

export class OffersPopMenuComponent implements OnInit {

  ngOnInit(): void {
  }
  constructor(private modalService: NgbModal,public offers :OfferService) {}
  @Input() restaurantID:number =0
  @Input() DiscountAmonut_:number =0
  @Input() Price:number =0
  @Input() MealName:string ='N/K'
  @Input() Validity:string ='N/K'
  @Input() RestaurantName:string ='N/K'

 @Output() openProfile=new EventEmitter()
  open() {
    this.showOffers()
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = 'Malak Khasawneh (:';
  }
  showOffers(){
    this.openProfile.emit()
    this.offers.SelectedOffers={ // when we click on one of card we store the data of selected card in array in home services
     restaurantID:this.restaurantID,
     RestaurantName:this.RestaurantName,
     DiscountAmonut_:this.DiscountAmonut_,
     Price:this.Price,
     Validity:this.Validity,
    MealName:this.MealName,
 
 }
 console.log("ff"+this.restaurantID)
 this.offers.GetAllOfferMeal(this.offers.SelectedOffers.restaurantID)
// this.router.navigate(['menu'])
  }

}
@Component({
  selector: 'ngbd-modal-content',
  template: `
  <div class="modal-header">
    <h4 class="modal-title">
     {{this.offers.SelectedOffers.RestaurantName}}
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