import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RegionViewComponent } from './region-view/region-view.component';
import { AllCountryComponent } from './all-country/all-country.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SingleCountryComponent } from './single-country/single-country.component';


@NgModule({
  declarations: [
    AppComponent,
    RegionViewComponent,
    AllCountryComponent,
    NotFoundComponent,
    SingleCountryComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'home',component:RegionViewComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'allCountry/:region',component:AllCountryComponent},
      {path:'singleCountry/:country',component:SingleCountryComponent},

      // { path: '**', component: RegionViewComponent }

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
