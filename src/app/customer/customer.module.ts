import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeCardComponent } from './home/home-card/home-card.component';
import { ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    ProfileComponent,
    HomeCardComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class CustomerModule { }
