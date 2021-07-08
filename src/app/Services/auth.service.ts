import { Injectable } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private spinner: NgxSpinnerService,private router:Router) { }
  login(){
    this.spinner.show()
   
       setTimeout(()=>{
   
         this.spinner.hide();
        // this.router.navigate(['client']) // when login to which page should go 
       },2000)
     }
}
