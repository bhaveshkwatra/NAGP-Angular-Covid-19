import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardModule } from '../../dashboard/dashboard.module';
import { StateReportComponent } from '../../dashboard/state-report/state-report.component';
import { UserModule } from 'src/app/user/user.module';
import { AdminModule } from 'src/app/admin/admin.module';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch:'full'},
  {path: 'dashboard', component: StateReportComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), DashboardModule, UserModule, AdminModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
