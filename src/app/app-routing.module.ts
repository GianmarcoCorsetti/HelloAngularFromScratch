import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { EditionAddComponent } from './editions/edition-add/edition-add.component';
import { EditionListComponent } from './editions/edition-list/edition-list.component';
import { EditionSearchComponent } from './editions/edition-search/edition-search.component';
import { EditionsComponent } from './editions/editions.component';
import { HomeComponent } from './home/home.component';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'editions', component: EditionsComponent },
  { path: 'editions/list', component: EditionListComponent},
  { path: 'edition/add', component: EditionAddComponent},
  { path: 'edition/search', component: EditionSearchComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
