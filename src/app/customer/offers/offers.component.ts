import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AllRestService } from 'src/app/Services/all-rest.service';
import { OfferService } from 'src/app/Services/offer.service';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {

  constructor(public offers :OfferService,public allRest :AllRestService,private tostar :ToastrService,public share :SharedModule) { }
  searchText:string ="";
  ngOnInit(): void {

    this.getAll()
  }
  
  getAll(){
    
    this.allRest.getAll().subscribe((res:any)=>{
      this.allRest.data=res;
      console.log("before "+ this.allRest.data)

      
    },err=>{
      console.error()
      this.tostar.error("something wrong")
    })
  }

}
