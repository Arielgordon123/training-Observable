import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlagComponentComponent } from './flag-component/flag-component.component';
import { FlagListComponent } from './flag-list/flag-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FlagService } from './flag-service.service';

@NgModule({
  declarations: [
    AppComponent,
    FlagComponentComponent,
    FlagListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [FlagService],
  bootstrap: [AppComponent]
})
export class AppModule { }
