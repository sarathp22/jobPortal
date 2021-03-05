import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProcessHttpmsgService } from './process-httpmsg.service';
import { AuthInterceptor, UnauthorizedInterceptor } from './auth.interceptor';
import {  EmployerInterceptor,UnauthorizedEmployerInterceptor  } from './employer.interceptor';
import { AdminInterceptor,UnauthorizedAdminInterceptor } from './admin.interceptor'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { EmployerRegisterComponent } from './employer-register/employer-register.component';
import { EmployerLoginComponent } from './employer-login/employer-login.component';
import { JobseekerRegisterComponent } from './jobseeker-register/jobseeker-register.component';
import { JobseekerLoginComponent } from './jobseeker-login/jobseeker-login.component';
import { ProfileComplete1Component } from './profile-complete1/profile-complete1.component';
import { ProfileComplete2Component } from './profile-complete2/profile-complete2.component';
import { ProfileComponent } from './profile/profile.component';
import { JobseekerChangePasswordComponent } from './jobseeker-change-password/jobseeker-change-password.component';
import { EmployerProfileComponent } from './employer-profile/employer-profile.component';
import { EmployerChangePasswordComponent } from './employer-change-password/employer-change-password.component';
import { PostNewJobComponent } from './post-new-job/post-new-job.component';
import { EmployerManageApplicationComponent } from './employer-manage-application/employer-manage-application.component';
import { JobseekerBrowseJobsComponent } from './jobseeker-browse-jobs/jobseeker-browse-jobs.component';
import { JobseekerJobDetailsComponent } from './jobseeker-job-details/jobseeker-job-details.component';
import { JobseekerAddResumeComponent } from './jobseeker-add-resume/jobseeker-add-resume.component';
import { JobseekerBrowseCategoriesComponent } from './jobseeker-browse-categories/jobseeker-browse-categories.component';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import { EmployerService } from './employer.service';
import { JobseekerService } from './jobseeker.service';
import { AuthService } from './auth.service';
import { EmployerViewJobsAppliedComponent } from './employer-view-jobs-applied/employer-view-jobs-applied.component';
import { EmployerJobseekerProfileViewComponent } from './employer-jobseeker-profile-view/employer-jobseeker-profile-view.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminService } from './admin.service';
import { AdminCompanyListComponent } from './admin-company-list/admin-company-list.component';
import { AdminCompanyApprovalComponent } from './admin-company-approval/admin-company-approval.component';
import { AdminCompanyProfileComponent } from './admin-company-profile/admin-company-profile.component';
import { AdminCompanyPostedJobsComponent } from './admin-company-posted-jobs/admin-company-posted-jobs.component';
import { AdminCompanyJobDetailsComponent } from './admin-company-job-details/admin-company-job-details.component';
import { AdminJobApplicantListComponent } from './admin-job-applicant-list/admin-job-applicant-list.component';
import { AdminJobseekerProfileViewComponent } from './admin-jobseeker-profile-view/admin-jobseeker-profile-view.component';
import { GeneralBrowseJobsComponent } from './general-browse-jobs/general-browse-jobs.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    EmployerRegisterComponent,
    EmployerLoginComponent,
    JobseekerRegisterComponent,
    JobseekerLoginComponent,
    ProfileComplete1Component,
    ProfileComplete2Component,
    ProfileComponent,
    JobseekerChangePasswordComponent,
    EmployerProfileComponent,
    EmployerChangePasswordComponent,
    PostNewJobComponent,
    EmployerManageApplicationComponent,
    JobseekerBrowseJobsComponent,
    JobseekerJobDetailsComponent,
    JobseekerAddResumeComponent,
    JobseekerBrowseCategoriesComponent,
    EmployerViewJobsAppliedComponent,
    EmployerJobseekerProfileViewComponent,
    AdminLoginComponent,
    AdminCompanyListComponent,
    AdminCompanyApprovalComponent,
    AdminCompanyProfileComponent,
    AdminCompanyPostedJobsComponent,
    AdminCompanyJobDetailsComponent,
    AdminJobApplicantListComponent,
    AdminJobseekerProfileViewComponent,
    GeneralBrowseJobsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [ProcessHttpmsgService,EmployerService,JobseekerService,AuthService,AdminService,
    
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UnauthorizedInterceptor,
      multi: true
    },

    {
      provide: HTTP_INTERCEPTORS,
      useClass: EmployerInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UnauthorizedEmployerInterceptor,
      multi: true
    },

    {
      provide: HTTP_INTERCEPTORS,
      useClass: AdminInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UnauthorizedAdminInterceptor,
      multi: true
    }


    ],
    
    // entryComponents: [
    //   EmployerLoginComponent,
    //   JobseekerLoginComponent
    // ],
  bootstrap: [AppComponent]
})
export class AppModule { }
