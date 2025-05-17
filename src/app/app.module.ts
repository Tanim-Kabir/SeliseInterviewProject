import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { DevExtremeModule } from 'devextreme-angular';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { CourseDetailComponent } from './pages/course-detail/course-detail.component';
import { SearchCoursesComponent } from './pages/search-courses/search-courses.component';
import { FormsModule } from '@angular/forms';
import { MyLearningComponent } from './pages/my-learning/my-learning.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseDetailComponent,
    SearchCoursesComponent,
    MyLearningComponent
  ],
  imports: [BrowserModule, AppRoutingModule, DevExtremeModule, FormsModule],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
