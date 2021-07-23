import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public navbarCollapsed = true;
  tab : any = 'tab1';
  tab1 : any
  tab2 : any
  tab3 : any
  tab4 : any
  tab5 : any
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  GoToRegister(){
    this.router.navigate(['register'])  
  }
  GoToLogin(){
    this.router.navigate(['login'])  
  }
  GoToAllRest(){
    this.router.navigate(['Rest']) 
  }
  
  GoToAllOffer(){
    this.router.navigate(['offer']) 
  }
  onClick(check:any){
    //    console.log(check);
        if(check==1){
          this.tab = 'tab1';
        }else if(check==2){
          this.tab = 'tab2';
        }else if(check==3){
          this.tab = 'tab3';
        }  
        else if(check==4){
          this.tab = 'tab4';
        }  else{
          this.tab = 'tab5';
        } 
    }
}

