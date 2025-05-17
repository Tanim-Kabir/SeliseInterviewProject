import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../shared/services/local-storage/local-storage.service';
import { Course } from '../../shared/interface/course.interface';

@Component({
  selector: 'app-search-courses',
  templateUrl: './search-courses.component.html',
  styleUrl: './search-courses.component.scss',
})
export class SearchCoursesComponent implements OnInit {
  searchQuery: string = '';
  courseList: Course[] = [];
  filteredCourses: Course[] = [];

  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit(): void {
    this.courseList = this.localStorageService.getLocalStorage('courses') || [];
    this.filteredCourses = this.courseList;
  }

  onSearch(): void {
    const query = this.searchQuery.trim().toLowerCase();

    if (!query) {
      this.filteredCourses = this.courseList;
      return;
    }

    this.filteredCourses = this.courseList.filter(
      (course) =>
        course.title.toLowerCase().includes(query) ||
        course.category.toLowerCase().includes(query)
    );
  }
}
