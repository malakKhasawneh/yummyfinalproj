import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class RestProfileService {
  data :any[]=[
    {}
      ]
      SelectedRest:any={};
  constructor(private http:HttpClient ,private tostar :ToastrService,private spinner:NgxSpinnerService,private router:Router) { }

  GetAllRestMenu(id :number){
    return this.http.get('https://localhost:44388/api/Restaurant/GetAllRestMenu/'+id)
    .subscribe((data:any)=>{
    console.log("id is "+ id )
        this.data=data;
      this.spinner.hide();
     
    },err=>{
      this.spinner.hide();
      this.tostar.error("error upload")
    })
  }
}
