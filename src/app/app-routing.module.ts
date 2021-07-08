import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { CustomerModule } from './customer/customer.module';
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
