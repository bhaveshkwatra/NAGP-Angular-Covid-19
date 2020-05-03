import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,ToastrModule.forRoot(), MaterialModule
  ], exports : [CommonModule, ToastrModule, MaterialModule
  ]
})
export class SharedModule { }
