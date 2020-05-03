import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule} from  '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule, MatError } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatGridListModule } from '@angular/material/grid-list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule, 
    MatCardModule, 
    RouterModule, 
    MatTableModule, 
    MatPaginatorModule, 
    MatSortModule, 
    MatFormFieldModule, 
    MatInputModule, 
    FlexLayoutModule, 
    MatGridListModule,
    MDBBootstrapModule.forRoot()
  ], exports : [ 
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule, 
    MatCardModule, 
    MatTableModule, 
    MatPaginatorModule,
    MatSortModule, 
    MatFormFieldModule, 
    FlexLayoutModule, 
    MatInputModule, 
    MatGridListModule, 
    CommonModule,
    MDBBootstrapModule
  ]
})
export class MaterialModule { }
