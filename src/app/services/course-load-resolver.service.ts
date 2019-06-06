import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Course } from '../model/course';
import { TrainingService } from './training.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseLoadResolverService implements Resolve<Course> {

  constructor(private trainingService: TrainingService) { }
  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Course | Observable<Course> | Promise<Course> {
            const id = route.paramMap.get('id');
            console.log(`Resolving with id: ${id}`);
            return this.trainingService.getCourse(id);
          }
}
