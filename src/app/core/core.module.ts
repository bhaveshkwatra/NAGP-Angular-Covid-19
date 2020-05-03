import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule, MaterialModule, RouterModule
  ],
  exports:[HeaderComponent, FooterComponent]
})
export class CoreModule { }
