import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { EditionsComponent } from './editions/editions.component';
import { CoursesComponent } from './courses/courses.component';
import { EditionListComponent } from './editions/edition-list/edition-list.component';
import { EditionAddComponent } from './editions/edition-add/edition-add.component';
import { EditionSearchComponent } from './editions/edition-search/edition-search.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    EditionsComponent,
    CoursesComponent,
    EditionListComponent,
    EditionAddComponent,
    EditionSearchComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
