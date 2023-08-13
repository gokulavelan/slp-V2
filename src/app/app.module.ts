import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './material';
import { LanguageComponent } from './language/language.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RegisterComponent } from './register/register.component';
import { StepperComponent } from './stepper/stepper.component';
import { EducationComponent } from './education/education.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ExperienceComponent } from './experience/experience.component';
import { IdentificationComponent } from './identification/identification.component';
import { EmployerRegisterComponent } from './employer-register/employer-register.component';
import { ViewpdfComponent } from './viewpdf/viewpdf.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    LanguageComponent,
    WelcomeComponent,
    RegisterComponent,
    StepperComponent,
    EducationComponent,
    LoginComponent,
    ExperienceComponent,
    IdentificationComponent,
    EmployerRegisterComponent,
    ViewpdfComponent,
    LoadingComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    ReactiveFormsModule,
    PdfViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
