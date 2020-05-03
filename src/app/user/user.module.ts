import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { PrecautionsComponent } from './precautions/precautions.component';
import { UserRoutingModule } from './user-routing/user-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [LatestNewsComponent, PrecautionsComponent],
  imports: [
    CommonModule, UserRoutingModule, SharedModule
  ], exports:[UserRoutingModule]
})
export class UserModule { }
