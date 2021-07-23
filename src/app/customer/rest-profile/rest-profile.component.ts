import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AllRestService } from 'src/app/Services/all-rest.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/shared/shared.module';
import { RestProfileService } from 'src/app/Services/rest-profile.service';
import { MenuComponent } from '../menu/menu.component';
import { Router } from '@angular/router';
@Component({ 
  selector: 'app-rest-profile',
  templateUrl: './rest-profile.component.html',
  styleUrls: ['./rest-profile.component.css']
})
export class RestProfileComponent implements OnInit {
  starRating = 0; 
 
  
  @Output() openMenu=new EventEmitter()
  constructor(public allrest :AllRestService, public shared :SharedModule,public restProf :RestProfileService,private router:Router) { }

  ngOnInit(): void {
  }
  ShowMenu(){
    
    this.openMenu.emit();
    this.restProf.SelectedRest={ // when we click on one of card we store the data of selected card in array in home services
      restaurantID:this.allrest.SelectedRest.restaurantID,
    
     }
     console.log("rest id is " +this.allrest.SelectedRest.restaurantID)
    this.restProf.GetAllRestMenu(this.allrest.SelectedRest.restaurantID)
  
  this.router.navigate(['menu'])
  
}
}
