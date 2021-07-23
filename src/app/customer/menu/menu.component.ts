import { Component, OnInit } from '@angular/core';
import { RestProfileService } from 'src/app/Services/rest-profile.service';
import { RestProfileComponent } from '../rest-profile/rest-profile.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public restProf :RestProfileService) { }

  ngOnInit(): void {
    console.log(this.restProf.data)
  }
  
}
