import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompagnesComponent } from './compagnes/compagnes.component';
import { CompagnesListComponent } from './compagnes-list/compagnes-list.component';
import { CompagnesDetailComponent } from './compagnes-detail/compagnes-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CompagnesComponent,
    CompagnesListComponent,
    CompagnesDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
