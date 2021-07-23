import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class OfferService {
  data :any[]=[{}]
      SelectedOffers:any={};
      SelectedRest:any={};
  constructor(private http:HttpClient ,private tostar :ToastrService,private spinner:NgxSpinnerService,private router:Router) { }
  GetAllOfferMeal(id :number){
    return this.http.get('https://localhost:44388/api/offer/GetAllOfferMeal/'+id)
    .subscribe((data:any)=>{
    console.log("id in offer is is "+ id )
        this.data=data
        console.log("data +" + this.data[0].Validity)
      this.spinner.hide();
     
    },err=>{
      this.spinner.hide();
      this.tostar.error("error upload")
    })
  }
}
