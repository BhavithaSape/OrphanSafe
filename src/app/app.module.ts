import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ButtonComponent } from './button/button.component';

import { AboutComponent } from './about/about.component';


import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './card/card.component';
import { YComponent } from './y/y.component';
import { SubBannerComponent } from './sub-banner/sub-banner.component';
import { HomeComponent } from './home/home.component';
import { Nav1Component } from './nav1/nav1.component';
import { BannerComponent } from './banner/banner.component';
import { OrphanageComponent} from './orphanage/orphanage.component';
import { SponsorComponent } from './sponsor/sponsor.component';
import { DonateComponent } from './donate/donate.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ConnectnewComponent } from './connectnew/connectnew.component';
import { PageComponent } from './page/page.component';
import { PaymentComponent } from './payment/payment.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ButtonComponent,
    AboutComponent,
    WelcomeComponent,
    LoginComponent,
    SignupComponent,
    FooterComponent,
    CardComponent,
    YComponent,
    SubBannerComponent,
    HomeComponent,
    Nav1Component,
    BannerComponent,
    OrphanageComponent,
    SponsorComponent,
    DonateComponent,
    ContactUsComponent,
    ConnectnewComponent,
    PageComponent,
    PaymentComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
