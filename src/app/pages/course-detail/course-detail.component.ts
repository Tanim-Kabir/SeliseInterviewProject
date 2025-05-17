import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from '../../shared/services/local-storage/local-storage.service';
import { Course } from '../../shared/interface/course.interface';
import { User } from '../../shared/interface/user.interface';
import { Enrolled } from '../../shared/interface/enrolled.interface';
import { LocalStorageDataModel } from '../../shared/model/local-storage-data.model';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.scss',
})
export class CourseDetailComponent implements OnInit {
  courseList: Course[] = [];
  courseId: string = null;
  course: Course = null;
  prerequisites: Course[] = [];
  userData: LocalStorageDataModel =
    this.localStorageService.getLocalStorage('localStorageData');
  enrolled: string[] = this.userData?.courses?.map((item) => item.id) || [];

  isPrerequisiteMatched: boolean = true;

  constructor(
    public readonly router: Router,
    public readonly route: ActivatedRoute,
    public readonly localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.courseList = this.localStorageService.getLocalStorage('courses');
    this.route.queryParams.subscribe((params) => {
      const id = params['id'];
      if (!id) return;

      this.courseId = id;
      this.course = this.courseList.find((course) => course?.id === id);

      if (!this.course) return;

      const prerequisites = this.course.prerequisites || [];
      this.prerequisites = this.courseList.filter((item) =>
        prerequisites.includes(item?.id)
      );

      if (this.prerequisites.length === 0) {
        this.isPrerequisiteMatched = true;
      } else {
        this.isPrerequisiteMatched = this.prerequisites.every((item) =>
          this.enrolled.includes(item?.id)
        );
      }
    });
  }

  goToDetailPage(id: string): void {
    this.router.navigate(['/course-detail'], {
      queryParams: { id: id },
    });
  }

  enroll(): void {
    let enrollments = this.localStorageService.getLocalStorage('enrollments');
    let courseToBeEnrolled = {
      userId: this.userData.user.userId,
      courseId: this.course.id,
      status: 'enrolled',
      progress: 0,
      enrolledAt: new Date().toLocaleString(),
    };
    enrollments = [...enrollments, courseToBeEnrolled];
    this.localStorageService.setLocalStorage('enrollments', enrollments);
  }
}
