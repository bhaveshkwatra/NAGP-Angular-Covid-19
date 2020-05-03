import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminModule } from 'src/app/admin/admin.module';

export const dashboardRoutes: Routes = [
  // {path: 'login', component: LoginComponent},
  // {path : 'news', component: NewsEntryComponent},
  // {path : 'latestnews', component: NewsDetailComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, AdminModule, RouterModule
  ], exports:[RouterModule]
})
export class DashboardRoutingModule { }
