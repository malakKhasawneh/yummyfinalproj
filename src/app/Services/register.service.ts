import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {Inject} from '@angular/core';
import { SharedModule } from '../shared/shared.module';
@Injectable({
 
  providedIn: 'root'
})

export class RegisterService {
 
   public static flag:string="FALSE";

    setGlobalVar(currentLanguage:string) {
      RegisterService.flag = currentLanguage;
    }
    getGlobalVar():string{
      return RegisterService.flag;
    }
  constructor(private http:HttpClient,private spinner: NgxSpinnerService,private tostar :ToastrService,private share:SharedModule) {
   }
   
 
  createCustomer(result :any){
    this.spinner.show();
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
      }
      const requestOptions = {
      headers: new HttpHeaders(headerDict),
      };
      this.http.post('https://localhost:44388/api/Customer/CreateCustomer',result).subscribe((data :any)=>{
        
       
          this.spinner.hide()
          this.tostar.success("Successfully Registered !!");
          
        
       },err=>{
         this.spinner.hide();
         this.tostar.error("Could not Register !!");
       })

  }
  CustomerAvailability(username:any){

     this.spinner.show()
     const headerDict = {
      'Content-Type': 'application/json',
       'Accept': 'application/json'
      }
      const requestOptions = {
      headers: new HttpHeaders(headerDict),
      };
  
    this.http.post('https://localhost:44388/api/Customer/check',JSON.stringify(username),requestOptions).subscribe(data =>{
    
      this.setGlobalVar(data.toString())
      console.log("hhhhhh is  " +this.getGlobalVar())
       this.spinner.hide();
      
      // this.tostar.error('flag true !!')
   },err=>{
  
    this.spinner.hide();
    //this.tostar.error('flag false !!')
   
   })
 
   
  }
  
}
