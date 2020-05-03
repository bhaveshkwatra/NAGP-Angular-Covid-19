import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StateReportComponent } from './state-report/state-report.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { DashboardRoutingModule } from './dashboard-routing/dashboard-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryAdminService } from '../core/services/in-memory-admin.service';
import { DistrictComponent } from './district/district.component';

@NgModule({
  declarations: [StateReportComponent, DistrictComponent],
  imports: [
    CommonModule, SharedModule, RouterModule, DashboardRoutingModule, HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryAdminService, { dataEncapsulation: false, passThruUnknownUrl: true })
  ],
  exports:[DashboardRoutingModule, DistrictComponent]
})
export class DashboardModule { }
