import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './pages/courses/courses.component';
import { MyLearningComponent } from './pages/my-learning/my-learning.component';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';
import { LearningHistoryComponent } from './pages/learning-history/learning-history.component';
import { SearchCoursesComponent } from './pages/search-courses/search-courses.component';
import { CourseDetailComponent } from './pages/course-detail/course-detail.component';

const routes: Routes = [
  { path: 'courses', pathMatch: 'full', component: CoursesComponent },
  { path: 'course-detail', pathMatch: 'full', component: CourseDetailComponent },
  { path: 'my-learning', pathMatch: 'full', component: MyLearningComponent },
  { path: 'my-profile', pathMatch: 'full', component: MyProfileComponent },
  { path: 'history', pathMatch: 'full', component: LearningHistoryComponent },
  { path: 'search', pathMatch: 'full', component: SearchCoursesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
