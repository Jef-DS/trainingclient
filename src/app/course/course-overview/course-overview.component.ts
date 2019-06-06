import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../../model/course';
import { TrainingService } from '../../services/training.service';

@Component({
  selector: 'app-course-overview',
  templateUrl: './course-overview.component.html',
  styleUrls: ['./course-overview.component.css']
})
export class CourseOverviewComponent implements OnInit {
  public courses$: Observable<Course[]>;
  constructor(private trainingService: TrainingService) {
    console.log('In CourseOverview constructor');
   }

  ngOnInit() {
    console.log('In oninit of CourseOverview');
    this.courses$ =  this.trainingService.getCourses();
  }

}
