import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AllRestService } from 'src/app/Services/all-rest.service';
@Component({
  selector: 'app-all-resturent',
  templateUrl: './all-resturent.component.html',
  styleUrls: ['./all-resturent.component.css']
})
export class AllResturentComponent implements OnInit {
  searchText:string ="";
  constructor(public allRest :AllRestService,private spinner: NgxSpinnerService,private tostar :ToastrService,private router:Router) { }
  


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
  GoToRestProfile(){
    
    this.router.navigate(['customer/restprofile'])
  }

}
