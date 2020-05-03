import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NewsEntryComponent } from './news-entry/news-entry.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryAdminService } from '../core/services/in-memory-admin.service';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { AdminRoutingModule } from './admin-routing/admin-routing.module';



@NgModule({
  declarations: [LoginComponent, NewsEntryComponent],
  imports: [
    CommonModule, 
    ReactiveFormsModule, 
    FormsModule, 
    AdminRoutingModule,
    HttpClientModule, 
    HttpClientInMemoryWebApiModule.forRoot(InMemoryAdminService, { dataEncapsulation: false, passThruUnknownUrl: true }),
    SharedModule
  ], 
  exports:[AdminRoutingModule]
})
export class AdminModule { }
