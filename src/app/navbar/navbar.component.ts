import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public navbarCollapsed = true;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  GoToRegister(){
    this.router.navigate(['register'])  
  }
  GoToLogin(){
    this.router.navigate(['login'])  
  }
}
