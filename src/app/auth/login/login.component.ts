import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public Formdata:any = {};
  userControl=new FormControl('',[Validators.required])

  passwordControl=new FormControl('',[Validators.required,Validators.minLength(8)])
  
  
  constructor(private router:Router ,private _cookieService:CookieService,public authServeie:AuthService) { 
    if(_cookieService.get('remember')) {
      this.Formdata.username=this._cookieService.get('username');
      this.Formdata.password=this._cookieService.get('password');
      this.Formdata.rememberme=this._cookieService.get('remember');
   }
  }
  toggleEditable(event:any){
    if ( event.target.checked ) {
      this._cookieService.set('username',this.Formdata.username);
      this._cookieService.set('password',this.Formdata.password);
      this._cookieService.set('remember',this.Formdata.rememberme);
      }
  }
  ngOnInit(): void {
  }
  GoToRegister(){
    this.router.navigate(['register'])  
  }
  submit(){
    this.authServeie.login();
   
  }

}
