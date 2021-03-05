import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminCompanyApprovalComponent } from './admin-company-approval/admin-company-approval.component';
import { AdminCompanyJobDetailsComponent } from './admin-company-job-details/admin-company-job-details.component';
import { AdminCompanyListComponent } from './admin-company-list/admin-company-list.component';
import { AdminCompanyPostedJobsComponent } from './admin-company-posted-jobs/admin-company-posted-jobs.component';
import { AdminCompanyProfileComponent } from './admin-company-profile/admin-company-profile.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { EmployerChangePasswordComponent } from './employer-change-password/employer-change-password.component';
import { EmployerJobseekerProfileViewComponent } from './employer-jobseeker-profile-view/employer-jobseeker-profile-view.component';
import { EmployerLoginComponent } from './employer-login/employer-login.component';
import { EmployerManageApplicationComponent } from './employer-manage-application/employer-manage-application.component';
import { EmployerProfileComponent } from './employer-profile/employer-profile.component';
import { EmployerRegisterComponent } from './employer-register/employer-register.component';
import { EmployerViewJobsAppliedComponent } from './employer-view-jobs-applied/employer-view-jobs-applied.component';
import { HomeComponent } from './home/home.component';
import { JobseekerAddResumeComponent } from './jobseeker-add-resume/jobseeker-add-resume.component';
import { JobseekerBrowseCategoriesComponent } from './jobseeker-browse-categories/jobseeker-browse-categories.component';
import { JobseekerBrowseJobsComponent } from './jobseeker-browse-jobs/jobseeker-browse-jobs.component';
import { JobseekerChangePasswordComponent } from './jobseeker-change-password/jobseeker-change-password.component';
import { JobseekerJobDetailsComponent } from './jobseeker-job-details/jobseeker-job-details.component';
import { JobseekerLoginComponent } from './jobseeker-login/jobseeker-login.component';
import { JobseekerRegisterComponent } from './jobseeker-register/jobseeker-register.component';
import { PostNewJobComponent } from './post-new-job/post-new-job.component';
import { ProfileComplete1Component } from './profile-complete1/profile-complete1.component';
import { ProfileComplete2Component } from './profile-complete2/profile-complete2.component';
import { ProfileComponent } from './profile/profile.component';
import { EmployerGuard } from './employer.guard';
import { JobseekerGuard } from './jobseeker.guard';
import { AdminGuard } from './admin.guard';
import { AdminJobApplicantListComponent } from './admin-job-applicant-list/admin-job-applicant-list.component';
import { AdminJobseekerProfileViewComponent } from './admin-jobseeker-profile-view/admin-jobseeker-profile-view.component';
import { GeneralBrowseJobsComponent } from './general-browse-jobs/general-browse-jobs.component';
import { GeneralGuard } from './general.guard';
const routes: Routes = [{path:'home',component:HomeComponent},
                        {path:'employer/register',component:EmployerRegisterComponent},
                        {path:'employer/login',component:EmployerLoginComponent},
                        {path:'jobseeker/register',component:JobseekerRegisterComponent},
                        {path:'jobseeker/login',component:JobseekerLoginComponent},
                        {path:'profile/complete1', component:ProfileComplete1Component,canActivate:[JobseekerGuard]},
                        {path:'profile/complete2', component:ProfileComplete2Component,canActivate:[JobseekerGuard]},
                        {path:'jobseeker/profile', component:ProfileComponent,canActivate:[JobseekerGuard]},
                        {path:'jobseeker/changePassword', component:JobseekerChangePasswordComponent,canActivate:[JobseekerGuard]},
                        {path:'jobseeker/browseJobs/:id', component:JobseekerBrowseJobsComponent,canActivate:[JobseekerGuard]},
                        {path:'jobseeker/JobDetails/:id', component:JobseekerJobDetailsComponent,canActivate:[JobseekerGuard]},
                        {path:'jobseeker/addResume', component:JobseekerAddResumeComponent,canActivate:[JobseekerGuard]},
                        {path:'jobseeker/browseCategories', component:JobseekerBrowseCategoriesComponent,canActivate:[JobseekerGuard]},
                        {path:'employer/profile', component:EmployerProfileComponent,canActivate:[EmployerGuard]},
                        {path:'employer/changePassword', component:EmployerChangePasswordComponent,canActivate:[EmployerGuard]},
                        {path:'employer/postNewJob', component:PostNewJobComponent,canActivate:[EmployerGuard]},
                        {path:'employer/receivedJobs/:id', component:EmployerViewJobsAppliedComponent,canActivate:[EmployerGuard]},
                        {path:'employer/manageApplications', component:EmployerManageApplicationComponent,canActivate:[EmployerGuard]},
                        {path:'employer/jobseekerProfileView/:userId/:jobId', component:EmployerJobseekerProfileViewComponent,canActivate:[EmployerGuard]},
                        {path:'admin/login',component:AdminLoginComponent},
                        {path:'admin/companyApproval',component:AdminCompanyApprovalComponent,canActivate:[AdminGuard]},
                        {path:'admin/companyList',component:AdminCompanyListComponent,canActivate:[AdminGuard]},
                        {path:'admin/companyProfile/:id',component:AdminCompanyProfileComponent,canActivate:[AdminGuard]},
                        {path:'admin/companyPostedJobs/:id',component:AdminCompanyPostedJobsComponent,canActivate:[AdminGuard]},
                        {path:'admin/companyJobDetails/:id',component:AdminCompanyJobDetailsComponent,canActivate:[AdminGuard]},
                        {path:'admin/jobApplicantList/:id',component:AdminJobApplicantListComponent,canActivate:[AdminGuard]},
                        {path:'admin/jobseekerProfileView/:jobseekerId/:id',component:AdminJobseekerProfileViewComponent,canActivate:[AdminGuard]},
                        {path:'general/browseJobs/:id', component:GeneralBrowseJobsComponent,canActivate:[GeneralGuard]},

                        {path:'',redirectTo:'home',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
