import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DetailsComponent } from './details/details.component';
import { ReportComponent } from './report/report.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  {
    path: '', component: LayoutComponent, 
    children: [
      { path: 'home', component: HomeComponent,},
      { path: 'about', component: AboutComponent, },
      { path: 'details', component: DetailsComponent, },
      { path: 'report', component: ReportComponent, },
      { path: 'test', component: TestComponent, },
      // { path: 'siemens', component: SiemensComponent, },
      // { path: 'document', component: DocumentComponent, },
      // { path: 'analysis', component: AnalysisComponent, },
    

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
