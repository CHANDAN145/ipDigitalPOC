import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './views/navbar/navbar.component';
import { CarouselViewComponent } from './views/carousel-view/carousel-view.component';
import { HomeComponent } from './pages/home/home.component';
import { IndustriesComponent } from './pages/industries/industries.component';
import { FooterComponent } from './views/footer/footer.component';
import { DatacenterComponent } from './pages/solutions/datacenter/datacenter.component';
import { ItEnablementComponent } from './pages/solutions/it-enablement/it-enablement.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselViewComponent,
    HomeComponent,
    IndustriesComponent,
    FooterComponent,
    DatacenterComponent,
    ItEnablementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
