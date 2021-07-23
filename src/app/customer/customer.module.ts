import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeCardComponent } from './home/home-card/home-card.component';
import { ReactiveFormsModule} from '@angular/forms';
import { AllResturentComponent } from './all-resturent/all-resturent.component';
import { ResturentCardsComponent } from './all-resturent/resturent-cards/resturent-cards.component';
import { RestProfileComponent } from './rest-profile/rest-profile.component';
import { OffersComponent } from './offers/offers.component';
import { MenuComponent } from './menu/menu.component';
import { MenuCardComponent } from './menu/menu-card/menu-card.component';
import { OffersCardComponent } from './offers/offers-card/offers-card.component';
import { OffersPopMenuComponent } from './offers-pop-menu/offers-pop-menu.component';
import { TestOffersComponent } from './offers/test-offers/test-offers.component';
import { CardComponent } from './offers/card/card.component';

@NgModule({
  declarations: [
    HomeComponent,
    ProfileComponent,
    HomeCardComponent,
    AllResturentComponent,
    ResturentCardsComponent,
    RestProfileComponent,
    OffersComponent,
    MenuComponent,
    MenuCardComponent,
    OffersCardComponent,
    OffersPopMenuComponent,
    TestOffersComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class CustomerModule { }
