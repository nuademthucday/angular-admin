import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import {RouterModule} from "@angular/router";
import {mainRouters} from "./main.routers";
import {UserModule} from "./user/user.module";
import {HomeModule} from "./home/home.module";

@NgModule({
  imports: [
    CommonModule,
    UserModule,
    HomeModule,
    RouterModule.forChild(mainRouters)
  ],
  declarations: [MainComponent]
})
export class MainModule { }
