import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LocalStorageService } from './shared/services/local-storage/local-storage.service';
import { User } from './shared/interface/user.interface';
import { Course } from './shared/interface/course.interface';
import { Enrollment } from './shared/interface/enrollment.interface';
import { LocalStorageDataModel } from './shared/model/local-storage-data.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  menuItems: any[] = [];
  title = 'SeliseLMS';
  activeIndex: string | null = null;
  public menuOpen: boolean = true;

  constructor(public readonly localStorageService: LocalStorageService) {
    this.menuItems = [
      {
        index: 1,
        menu_index: 'mi_1',
        origin: 'admin',
        prod: true,
        id: null,
        href: null,
        routerLink: '/courses',
        name: 'Courses',
        activeIcon: './assets/images/icon/learn_icon_active.svg',
        inactiveIcon: './assets/images/icon/learn_icon_inactive.svg',
        submenu: [],
      },
      {
        index: 2,
        menu_index: 'mi_2',
        origin: 'admin',
        prod: true,
        id: null,
        routerLink: '/my-learning',
        href: null,
        name: 'My Learning',
        activeIcon: './assets/images/icon/learn_icon_active.svg',
        inactiveIcon: './assets/images/icon/learn_icon_inactive.svg',
        submenu: [],
      },
      {
        index: 3,
        menu_index: 'mi_3',
        origin: 'admin',
        prod: true,
        id: null,
        routerLink: '/my-profile',
        href: null,
        name: 'My Profile',
        activeIcon: './assets/images/icon/learn_icon_active.svg',
        inactiveIcon: './assets/images/icon/learn_icon_inactive.svg',
        submenu: [],
      },
      {
        index: 4,
        menu_index: 'mi_4',
        origin: 'admin',
        prod: true,
        id: null,
        routerLink: '/history',
        href: null,
        name: 'Learning History',
        activeIcon: './assets/images/icon/learn_icon_active.svg',
        inactiveIcon: './assets/images/icon/learn_icon_inactive.svg',
        submenu: [],
      },
      {
        index: 5,
        menu_index: 'mi_5',
        origin: 'admin',
        prod: true,
        id: null,
        routerLink: '/search',
        href: null,
        name: 'Search Course',
        activeIcon: './assets/images/icon/learn_icon_active.svg',
        inactiveIcon: './assets/images/icon/learn_icon_inactive.svg',
        submenu: [],
      },
    ];
  }

  ngOnInit(): void {
    this.localStorageService.setLocalStorage('courses', this.sampleCourses);
    this.localStorageService.setLocalStorage(
      'enrollments',
      this.sampleEnrollments
    );
    this.localStorageService.setLocalStorage(
      'localStorageData',
      this.localStorageData
    );
  }

  sampleUser: User = {
    userId: 'b5a3f4b8-d41e-4e9c-8e5b-f7b203c91cf2',
    name: 'Alice Johnson',
    email: 'alice.johnson@example.com',
    preferences: {
      preferredCategories: ['Programming', 'Business'],
      notifications: true,
    },
  };

  localStorageData: LocalStorageDataModel = new LocalStorageDataModel(
    this.sampleUser
  );

  sampleCourses: Course[] = [
    {
      id: 'c1f3a138-8b8b-41f3-9861-b1741f51918b',
      title: 'Python for Beginners',
      description:
        'An introduction to Python programming with practical examples.',
      category: 'Programming',
      isFree: true,
      prerequisites: [],
      duration: 6,
    },
    {
      id: 'b99f7a69-19e6-4f3f-96b6-7d4f3d7c8b8d',
      title: 'Full-Stack Web Development',
      description:
        'Become a full-stack developer with HTML, CSS, JavaScript, and Node.js.',
      category: 'Programming',
      isFree: false,
      prerequisites: ['c1f3a138-8b8b-41f3-9861-b1741f51918b'],
      duration: 12,
    },
    {
      id: '58e83e22-9e70-4b96-bb5c-61ea91ad49b4',
      title: 'Project Management Essentials',
      description: 'Learn the fundamentals of managing projects successfully.',
      category: 'Business',
      isFree: true,
      prerequisites: [],
      duration: 5,
    },
    {
      id: 'f2adad64-88c5-4e7b-81a9-60ce8dfdb42b',
      title: 'Data Science & Machine Learning',
      description:
        'Explore data science concepts with hands-on machine learning exercises.',
      category: 'Programming',
      isFree: false,
      prerequisites: ['c1f3a138-8b8b-41f3-9861-b1741f51918b'],
      duration: 10,
    },
    {
      id: '4c761fa1-8415-426b-bdd7-812b4462cdd1',
      title: 'Digital Marketing Mastery',
      description:
        'A complete guide to SEO, content marketing, and social media.',
      category: 'Marketing',
      isFree: true,
      prerequisites: [],
      duration: 7,
    },
  ];

  sampleEnrollments: Enrollment[] = [
    // {
    //   userId: 'b5a3f4b8-d41e-4e9c-8e5b-f7b203c91cf2',
    //   courseId: 'c1f3a138-8b8b-41f3-9861-b1741f51918b',
    //   status: 'completed',
    //   progress: 100,
    //   enrolledAt: '2025-04-01T09:00:00Z',
    //   completedAt: '2025-04-07T16:00:00Z',
    // }
  ];

  public setMenuIndex(menu: any): void {
    const menuItem = JSON.parse(JSON.stringify(menu));
    delete menuItem.submenu;

    this.activeIndex = menu.menu_index;
    this.localStorageService.setSelectedMenuInfo(menuItem);
  }

  public isActive(index: string): boolean {
    return this.activeIndex === index;
  }
}
