import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { AppComponent } from './app.component';
import { Configuration } from './app.constants';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PartnerComponent } from './partner/partner.component';
import { ProductComponent } from './product/product.component';



const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    PartnerComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
    appRoutes,
  // { enableTracing: true },
  { useHash: true }
),
  TooltipModule.forRoot(),
  CarouselModule.forRoot(),
  ],
  providers: [
    Configuration
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
