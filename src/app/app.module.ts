import { NotFoundComponent } from './not-found/not-found.component';
import { HttpModule } from '@angular/http'
import { SummaryPipe } from './summary.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, ErrorHandler } from '@angular/core';


import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { AuthorsComponent } from './authors/authors.component';
import { CoursesService } from './courses.service';
import { AuthorsService } from './authors.service';
import { UsersComponent } from './users/users.component';
import { UserService } from './user.service';
import { FavoriteComponent } from './favorite/favorite.component';
import { TitleCasePipe } from './title-case.pipe';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CourseCreateComponent } from './course-create/course-create.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { PostsComponent } from './posts/posts.component';
import { PostService } from './services/post.service';
import { AppErrorHandler } from './common/app-error.handler';
import { FollowersComponent } from './followers/followers.component';
import { FollowerService } from './services/follower.service';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { RouterModule, ROUTES } from '@angular/router';
import { ChartsComponent } from './charts/charts.component';
import { ChartsModule } from 'ng2-charts';
import { LineChartDemoComponent } from './line-chart-demo/line-chart-demo.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { PolarAreaChartComponent } from './polar-area-chart/polar-area-chart.component';
import { DynamicChartComponent } from './dynamic-chart/dynamic-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    CoursesComponent,
    CourseComponent,
    AuthorsComponent,
    UsersComponent,
    SummaryPipe,
    FavoriteComponent,
    TitleCasePipe,
    PanelComponent,
    LikeComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    CourseCreateComponent,
    NewCourseFormComponent,
    ChangePasswordComponent,
    PostsComponent,
    FollowersComponent,
    NavbarComponent,
    HomeComponent,
    GithubProfileComponent,
    NotFoundComponent,
    ChartsComponent,
    LineChartDemoComponent,
    DoughnutChartComponent,
    RadarChartComponent,
    PieChartComponent,
    PolarAreaChartComponent,
    DynamicChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,  
    ChartsModule,  
    RouterModule.forRoot([
      { 
        path: '', 
        component: HomeComponent 
      },
      { 
        path: 'followers/:id/:username', 
        component: GithubProfileComponent 
      },
      { 
        path: 'followers', 
        component: FollowersComponent 
      },      
      { 
        path: 'posts', 
        component: PostsComponent 
      },
      {
        path: 'charts',
        component: ChartsComponent
      },
      {
        path: 'barChart',
        component: LineChartDemoComponent
      },
      {
        path: 'doughnutChart',
        component: DoughnutChartComponent
      },      
      {
        path: 'radarChart',
        component: RadarChartComponent
      },  
      {
        path: 'pieChart',
        component: PieChartComponent
      },     
      {
        path: 'polarAreaChart',
        component: PolarAreaChartComponent
      },   
      {
        path: 'dynamicChart',
        component: DynamicChartComponent
      },
      { 
        path: '**', 
        component: NotFoundComponent 
      },
    ])
  ],
  providers: [
    PostService,
    CoursesService,
    AuthorsService,
    UserService,
    FollowerService,
    { provide: ErrorHandler, useClass: AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

