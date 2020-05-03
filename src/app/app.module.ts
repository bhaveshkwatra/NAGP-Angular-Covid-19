import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CoreModule} from './core/core.module';
import { AppRoutingModule } from './core/approuting/app-routing.module';
import { UserRoutingModule } from './user/user-routing/user-routing.module';
import { AdminRoutingModule } from './admin/admin-routing/admin-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule, 
    UserRoutingModule,
    AppRoutingModule, AdminRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
