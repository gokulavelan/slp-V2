import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LanguageComponent } from './language/language.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RegisterComponent } from './register/register.component';
import { StepperComponent } from './stepper/stepper.component';
import { EducationComponent } from './education/education.component';
import { LoginComponent } from './login/login.component';
import { ExperienceComponent } from './experience/experience.component';
import { IdentificationComponent } from './identification/identification.component';
import { EmployerRegisterComponent } from './employer-register/employer-register.component';
import { ViewpdfComponent } from './viewpdf/viewpdf.component';




const routes: Routes = [
  { path: '', component: WelcomeComponent},
  { path: 'Language', component: LanguageComponent},
  { path: 'stepper', component: StepperComponent},
  { path: 'education', component: EducationComponent},
  { path: 'login', component: LoginComponent},
  { path: 'experience', component: ExperienceComponent},
  { path: 'identification', component: IdentificationComponent},
  { path: 'employer-register', component: EmployerRegisterComponent},
  { path: 'preview-pdf', component: ViewpdfComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
