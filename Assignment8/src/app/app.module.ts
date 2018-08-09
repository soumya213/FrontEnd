import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HouseViewComponent } from './house-view/house-view.component';
import { CharacterViewComponent } from './character-view/character-view.component';
import { BookViewComponent } from './book-view/book-view.component';
import { NotfoundViewComponent } from './notfound-view/notfound-view.component';

import {HttpClientModule} from "@angular/common/http"
import {RouterModule,Routes} from "@angular/router"
import { ApiServiceService } from './api-service.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HouseViewComponent,
    CharacterViewComponent,
    BookViewComponent,
    NotfoundViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'home',component:HomeComponent},
      {path:'bookView/:bookUrl',component:BookViewComponent},
      {path:'houseView/:houseUrl',component:HouseViewComponent},
      {path:'characterView/:characterUrl',component:CharacterViewComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'**',component:NotfoundViewComponent}
    ])

    

  ],
  providers: [ApiServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
