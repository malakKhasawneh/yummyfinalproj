import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from "ngx-spinner";
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import{HttpClientModule}from '@angular/common/http'
import {MatCardModule} from '@angular/material/card';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { RestProfileComponent } from '../customer/rest-profile/rest-profile.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    FormsModule,
    NgxSpinnerModule,
    MatSidenavModule,
    MatMenuModule,
    HttpClientModule,
    MatCardModule,
    NgbModule,
    Ng2SearchPipeModule
  ],
  exports: [
    MatIconModule,
    MatToolbarModule,
    FormsModule,
    NgxSpinnerModule,
    MatSidenavModule,
    MatMenuModule,
    HttpClientModule,
    MatCardModule,
    NgbModule,
    Ng2SearchPipeModule

    

  ]
})
export class SharedModule { 
  public flag :any
  public flag2 :any=false
  public login :any=false
  public restId:number=0

}
