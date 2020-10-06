import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportRoutingModule } from './report-routing.module';
import { ReportComponent } from './report.component';
import { Report1Component } from './report1/report1.component';


@NgModule({
  declarations: [ReportComponent, Report1Component],
  imports: [
    CommonModule,
    ReportRoutingModule
  ]
})
export class ReportModule { }
