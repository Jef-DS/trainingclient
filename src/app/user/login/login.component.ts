import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { UserStoreService } from '../../services/user-store.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public username = '';
  public password = '';
  public message = '';
  constructor(private userService: UserService, private router: Router,
    private userStoreService: UserStoreService) { }
  login() {
    this.userService.login(this.username, this.password)
          .subscribe((resp) => {
            console.log('Succesful login');
            this.message = resp.message;
            this.router.navigate([this.userStoreService.redirectUrl]);
          }, (err) => {
            console.error('Error logging in', err);
            this.message = err.error.msg;
          });
  }

  
}
