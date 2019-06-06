import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../../model/course';
import { TrainingService } from '../../services/training.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  public course: Course;
  constructor(private trainingService: TrainingService,
    private route: ActivatedRoute) {
    console.log('In CourseDetailsComponent constructor');
  }

  ngOnInit() {
    this.route.data.subscribe((data: {course: Course}) => {
        console.log('subscription succeeded');
        console.dir(data);
        this.course = data.course;
    });
  }

}
