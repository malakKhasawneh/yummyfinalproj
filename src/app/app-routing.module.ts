import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AuthModule } from './auth/auth.module';
import { AllResturentComponent } from './customer/all-resturent/all-resturent.component';
import { CustomerModule } from './customer/customer.module';
import { MenuComponent } from './customer/menu/menu.component';
import { CardComponent } from './customer/offers/card/card.component';
import { OffersComponent } from './customer/offers/offers.component';
import { TestOffersComponent } from './customer/offers/test-offers/test-offers.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {
    path:'auth',
    loadChildren:()=> AuthModule
    },
    {
      path:'',
      loadChildren:()=> CustomerModule
      },
      {
        path:'offers',
        component: TestOffersComponent
        },
        {
          path:'about',
          component: AboutUsComponent
          },
      {
        path:'card',
        component: CardComponent
        },
      {
        path:'offer',
        component: OffersComponent
        },
      {
        path:'Rest',
        component: AllResturentComponent
        },
        {
          path:'customer',
         // loadChildren:()=> ClientModule // to call module
          loadChildren:() =>import('./customer/customer.module').then((m)=> m.CustomerModule)
        },
        
   {
    path:'hh',
    component:NavbarComponent
    },
    {
      path:'foot',
      component:FooterComponent
      },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
