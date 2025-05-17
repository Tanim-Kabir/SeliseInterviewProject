import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../shared/services/local-storage/local-storage.service';
import { Router } from '@angular/router';
import { Course } from '../../shared/interface/course.interface';
import { Enrollment } from '../../shared/interface/enrollment.interface';

@Component({
  selector: 'app-my-learning',
  templateUrl: './my-learning.component.html',
  styleUrl: './my-learning.component.scss',
})
export class MyLearningComponent implements OnInit {
  courseList: Course[] = [];
  enrollments: Enrollment[] = [];
  enrichedEnrollments: any[] = [];

  constructor(
    public readonly router: Router,
    public readonly localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.courseList = this.localStorageService.getLocalStorage('courses');
    this.enrollments = this.localStorageService.getLocalStorage('enrollments');

    this.enrollments = Array.from(
      new Map(
        this.enrollments.map((course) => [course.courseId, course])
      ).values()
    );

    this.enrichedEnrollments = this.enrollments.map((enroll) => {
      const course = this.courseList.find((c) => c.id === enroll.courseId);
      return {
        ...enroll,
        title: course?.title || 'Unknown Course',
      };
    });

    console.log(this.enrichedEnrollments);
  }

  goToDetailPage(id: string): void {
    this.router.navigate(['/course-detail'], {
      queryParams: { id: id },
    });
  }
}
