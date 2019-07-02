import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { FactoryFilmsService } from './factory-films.service';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule
  ],
  providers: [FactoryFilmsService],
  bootstrap: [AppComponent]
})
export class AppModule { }