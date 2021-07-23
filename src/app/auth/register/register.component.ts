import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { RegisterService } from 'src/app/Services/register.service';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  flag :boolean = false

  exist:any
  registerForm : FormGroup =new FormGroup({
  name:new FormControl('',[Validators.required]),
  username:new FormControl('',[Validators.required]),
  email:new FormControl('',[Validators.required,Validators.email]),
  password:new FormControl('',[Validators.required,Validators.minLength(8)]),
  RepasswordControl:new FormControl('',[Validators.required,Validators.minLength(8)]),
  gender:new FormControl ('', [Validators.required]),
  Location:new FormControl(''),
  phoneNumber :new FormControl('')

});

  constructor(private router:Router ,private fb: FormBuilder,private reigster:RegisterService,private tostar :ToastrService ,public spinner: NgxSpinnerService,private share :SharedModule) { 
  }
  submit(){
    
    if(this.registerForm.get('password')?.value != this.registerForm.get('RepasswordControl')?.value)
    this.flag = true;
    else{
      this.CustomerAvailability()
      setTimeout(() => {
        console.log("flag  is this.exit " +typeof(this.reigster.getGlobalVar()))
        this.exist=this.reigster.getGlobalVar().toUpperCase()
      },5000)

      this.createCustomer()
    }
   
  }
  
  ngOnInit(): void {
   
  }
  GoToLogin(){
    this.router.navigate(['login'])  
  }
  createCustomer(){
   
   
     if(this.exist=="TRUE".toUpperCase() ){
    this.reigster.createCustomer(this.registerForm.value);
     }
    else{
      this.tostar.error('UserName already exist !!')
      //this.spinner.hide()
    }
    
  }
  CustomerAvailability(){
    this.reigster.CustomerAvailability(this.registerForm.value)
  }


}
