import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportComponent } from './report.component';
import { Report1Component } from './report1/report1.component';

const routes: Routes = [
  { path: '', component: ReportComponent },
  { path: 'report1', component: Report1Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportRoutingModule { }
