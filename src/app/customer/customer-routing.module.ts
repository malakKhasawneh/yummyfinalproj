import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from '../auth/auth.module';
import { LoginComponent } from '../auth/login/login.component';
import { RegisterComponent } from '../auth/register/register.component';
import { AllResturentComponent } from './all-resturent/all-resturent.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { ProfileComponent } from './profile/profile.component';
import { RestProfileComponent } from './rest-profile/rest-profile.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
    },
    {
      path:'login',
      component: LoginComponent
      },
      {
        path:'register',
        component: RegisterComponent
        },
        {
          path:'Rest',
          component: AllResturentComponent
          },
          {
            path:'restprofile',
            component: RestProfileComponent
            },
            {
              path:'menu',
              component: MenuComponent
              },
    
    {
      path:'profile',
      component: ProfileComponent
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
