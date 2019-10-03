import { NgModule, Component } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { CourseOverviewComponent } from './course/course-overview/course-overview.component';
import { UserOverviewComponent } from './user/user-overview/user-overview.component';
import { CourseDetailsComponent } from './course/course-details/course-details.component';
import { LoginComponent } from './user/login/login.component';
import { AuthGuardGuard } from './guards/auth-guard.guard';
import { CourseLoadResolverService } from './services/course-load-resolver.service';
import {environment} from '../environments/environment';

const appRoutes: Routes = [
  { path: '', redirectTo: '/courses', pathMatch: 'full'},
  { path: 'courses', component: CourseOverviewComponent, pathMatch: 'full'},
  { path: 'courses/:id', component: CourseDetailsComponent,
                          resolve: {course: CourseLoadResolverService}},
  { path: 'users', component: UserOverviewComponent,
    canActivate: [AuthGuardGuard]},
  { path: 'users/login', component: LoginComponent}
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes,
      {enableTracing: environment.enableRouteTracing})
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutesModule { }
