import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FactoryFilmsService } from './factory-films.service';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material';
import { FenetreModalComponent } from './fenetre-modal/fenetre-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    FenetreModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule
  ],
  entryComponents : [
    FenetreModalComponent
  ],
  providers: [FactoryFilmsService],
  bootstrap: [AppComponent]
})
export class AppModule { }