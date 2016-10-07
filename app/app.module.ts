import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }   from './components/app.component';
import { routing } from './app.routing';
import { GetStudentsComponent } from './components/get-students/get-students.component';

import { GetStudentsService } from './services/get-students.service';

import 'app/rxjs-extensions';

@NgModule({
  imports:      [ BrowserModule,
  	FormsModule,
  	HttpModule,
  	routing ],
  declarations: [ AppComponent, GetStudentsComponent],
  providers: [ GetStudentsService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }