import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseOverviewComponent } from './course/course-overview/course-overview.component';
import { UserOverviewComponent } from './user/user-overview/user-overview.component';
import { AppRoutesModule } from './/app-routes.module';
import { CourseDetailsComponent } from './course/course-details/course-details.component';
import { LoginComponent } from './user/login/login.component';
import { CourseAppInterceptor } from './services/course-app-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    CourseOverviewComponent,
    UserOverviewComponent,
    CourseDetailsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutesModule,
    FormsModule,
  ],
  providers: [   {
      provide: HTTP_INTERCEPTORS,
      useClass: CourseAppInterceptor,
      multi: true
    },],
  bootstrap: [AppComponent]
})
export class AppModule { }
