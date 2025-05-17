import { Course } from "../interface/course.interface";
import { Enrolled } from "../interface/enrolled.interface";
import { Enrollment } from "../interface/enrollment.interface";
import { User } from "../interface/user.interface";

export class LocalStorageDataModel {
  courses: Course[] = [];
  enrollments: Enrolled[] = [];
  user: User | null = null;

  constructor(obj?: User) {
    if (obj) {
      this.user = obj;
    }
  }
}