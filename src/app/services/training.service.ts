import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../model/course';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  constructor(private http: HttpClient) { }
  getCourses(): Observable<Course[]> {
    console.log('Returning courses');
    return this.http.get<Course[]>('api/courses');
  }
  getCourse(id: string): Observable<Course> {
    console.log(`Returning course with id ${id}`);
    return this.http.get<Course>(`api/courses/${id}`);
  }
  getUsers(): Observable<User[]> {
    console.log('Returning users');
    return this.http.get<User[]>('api/users');
  }

}
