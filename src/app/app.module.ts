import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../app/material/material.module';
import { ComponentsModule } from './components/components.module';

// services
import { ServiceService } from './services/service.service';
import { HttpClientModule } from '@angular/common/http';
import { DemoModule } from './demo/demo.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ComponentsModule,
    HttpClientModule,
    DemoModule
  ],
  providers: [ServiceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
