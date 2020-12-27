import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

// owl carousel
import { NgHttpLoaderModule } from 'ng-http-loader'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './pages/landing/landing.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LandingHeaderComponent } from './components/landing-header/landing-header.component';
import { ServicesComponent } from './components/services/services.component';
import { GridComponent } from './components/grid/grid.component';
import { ChooseUsComponent } from './components/choose-us/choose-us.component';
import { LandingContactComponent } from './components/landing-contact/landing-contact.component';
import { LandingFooterComponent } from './components/landing-footer/landing-footer.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavbarComponent,
    FooterComponent,
    LandingHeaderComponent,
    ServicesComponent,
    GridComponent,
    ChooseUsComponent,
    LandingContactComponent,
    LandingFooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgHttpLoaderModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AppModule { }
