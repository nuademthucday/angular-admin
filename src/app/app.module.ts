import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {appRouters} from "./app.routers";
import {RouterModule} from "@angular/router";
import {MainModule} from "./main/main.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRouters)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
