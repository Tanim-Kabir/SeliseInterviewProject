import { Component, OnInit } from '@angular/core';
import { Course } from '../../shared/interface/course.interface';
import { LocalStorageService } from '../../shared/services/local-storage/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent implements OnInit {
  courseList: Course[] = [];

  constructor(
    public readonly router: Router,
    public readonly localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.courseList = this.localStorageService.getLocalStorage('courses');
  }

  goToDetailPage(id: string): void {
    this.router.navigate(['/course-detail'], {
      queryParams: { id: id },
    });
  }
}
