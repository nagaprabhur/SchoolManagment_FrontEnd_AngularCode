import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ResgistrationComponent } from './resgistration/resgistration.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistrationService} from './resgistration/registration.service';
import { UpdatemarksComponent } from './updatemarks/updatemarks.component';
import { UpdatemarksService} from './updatemarks/updatemarks.service';
import { PerformancereportComponent} from './performancereport/performancereport.component';
import { PerformancereportService} from './performancereport/performancereport.service';
import { GivenYearPerformanceComponent } from './given-year-performance/given-year-performance.component';
import {GivenYearService} from './given-year-performance/given-year.service';

const appRoutes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: 'register',component: ResgistrationComponent },
  { path: 'update',component: UpdatemarksComponent },
  { path: 'report',component: PerformancereportComponent },
  { path: 'performByYear',component: GivenYearPerformanceComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }//,
  //{ path: '**', component: PageNotFoundComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    ResgistrationComponent,
    HomepageComponent,
    UpdatemarksComponent,
    PerformancereportComponent,
    GivenYearPerformanceComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(
      appRoutes,
    ),HttpClientModule,FormsModule,ReactiveFormsModule
  ],
  providers: [RegistrationService,UpdatemarksService,PerformancereportService,GivenYearService],
  bootstrap: [AppComponent]
})
export class AppModule { }
