import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from "ngx-spinner";
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import{HttpClientModule}from '@angular/common/http'
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
    HttpClientModule
  ],
  exports: [
    MatIconModule,
    MatToolbarModule,
    FormsModule,
    NgxSpinnerModule,
    MatSidenavModule,
    MatMenuModule,
    HttpClientModule

  ]
})
export class SharedModule { 
}
