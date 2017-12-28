import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {HomeComponent} from './home.component';

import {ComponentsModule} from '../components/components.module';
import {ContactModule} from "../contact/contact.module";
import {AboutModule} from "../about/about.module";
import {ProjectsModule} from "../projects/projects.module";

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        RouterModule,
      ComponentsModule,
      ContactModule,
      AboutModule,
      ProjectsModule
    ],
    declarations: [ HomeComponent ],
    exports:[ HomeComponent ],
    providers: []
})
export class HomeModule { }
