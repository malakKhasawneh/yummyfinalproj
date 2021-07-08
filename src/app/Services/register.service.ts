import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient,private spinner: NgxSpinnerService,private tostar :ToastrService) { }

  createCustomer(result :any){
    this.spinner.show();
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
      }
      const requestOptions = {
      headers: new HttpHeaders(headerDict),
      };
      result.name=
      this.http.post('https://localhost:44388/api/Customer/CreateCustomer',result,requestOptions).subscribe((data :any)=>{
        
          this.tostar.success("Successfully Registered !!");
          this.spinner.hide()
        
        
       },err=>{
         this.spinner.hide();
         this.tostar.error("Could not Register !!");
       })

  }
}
