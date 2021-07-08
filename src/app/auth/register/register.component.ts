import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/Services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  flag :boolean = false
  registerForm : FormGroup =new FormGroup({
  nameControl:new FormControl('',[Validators.required]),
  usernameControl:new FormControl('',[Validators.required]),
  emailControl:new FormControl('',[Validators.required,Validators.email]),
  passwordControl:new FormControl('',[Validators.required,Validators.minLength(8)]),
  RepasswordControl:new FormControl('',[Validators.required,Validators.minLength(8)]),
  gender:new FormControl ('', [Validators.required])
});
  constructor(private router:Router ,private fb: FormBuilder,private reigster:RegisterService) { 
    
  }
  submit(){
    
    if(this.registerForm.get('passwordControl')?.value != this.registerForm.get('RepasswordControl')?.value)
    this.flag = true;
    else{
      this.createCustomer()
    }

  }
  
  ngOnInit(): void {
  }
  GoToLogin(){
    this.router.navigate(['login'])  
  }
  createCustomer(){
    
    this.reigster.createCustomer(this.registerForm.value);
    
  }


}
