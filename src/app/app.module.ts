import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { CookieService } from 'ngx-cookie-service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { ToastrModule ,ToastNoAnimationModule} from 'ngx-toastr';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AboutUsComponent } from './about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    FlexLayoutModule,
    NgbModule,
    ToastNoAnimationModule.forRoot(),
    ToastrModule.forRoot(),
    Ng2SearchPipeModule,
    
  ],
  providers: [
    CookieService ,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
