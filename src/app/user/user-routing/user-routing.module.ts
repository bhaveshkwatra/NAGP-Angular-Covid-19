import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LatestNewsComponent } from '../latest-news/latest-news.component';
import { PrecautionsComponent } from '../precautions/precautions.component';


const routes: Routes = [ 
  {path : 'news', component : LatestNewsComponent},
  {path : 'precautions', component : PrecautionsComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
