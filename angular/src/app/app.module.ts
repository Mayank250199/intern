import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { HttpClientModule } from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { Configuration } from './app.constants';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PartnerComponent } from './partner/partner.component';
import { ProductComponent } from './product/product.component';

import { ProductService } from './providers/product.service';

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
    HttpClientModule,
    RouterModule.forRoot(
    appRoutes
  // { enableTracing: true },
  { useHash: true }
),
  TooltipModule.forRoot(),
  CarouselModule.forRoot(),
  ],
  providers: [
    Configuration,
    ProductService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
