import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../model/user';
import { TrainingService } from '../../services/training.service';
import { UserStoreService } from '../../services/user-store.service';

@Component({
  selector: 'app-user-overview',
  templateUrl: './user-overview.component.html',
  styleUrls: ['./user-overview.component.css']
})
export class UserOverviewComponent implements OnInit {
  public users$: Observable<User[]>;
  constructor(private trainingService: TrainingService, private userStore: UserStoreService) {
    console.log('In Constructor of UserOVerViewComponent');
  }

  ngOnInit() {
    console.log('In OnInit of UserOVerViewComponent');
    this.users$ = this.trainingService.getUsers();
  }

}
