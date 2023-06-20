import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { OrphanageComponent } from './orphanage/orphanage.component';
import { SponsorComponent } from './sponsor/sponsor.component';
import { DonateComponent } from './donate/donate.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ConnectnewComponent } from './connectnew/connectnew.component';
import { PaymentComponent } from './payment/payment.component';


const routes: Routes = [
  {path:'',component:WelcomeComponent},
  {path:'about',component:AboutComponent},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'signup',component:SignupComponent},
  {path:'orphanage',component:OrphanageComponent},
  {path:'sponsor',component:SponsorComponent},
  {path:'donate',component:DonateComponent},
  {path:'contact-us',component:ContactUsComponent},
  {path:'connectnew',component:ConnectnewComponent},
  {path:'payment',component:PaymentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
