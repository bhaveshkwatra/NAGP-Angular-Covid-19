import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { NewsEntryComponent } from '../news-entry/news-entry.component';
import { AuthGuard } from 'src/app/core/guard/auth.guard';


const routes: Routes = [ 
  {path:'login', component: LoginComponent},
  {path: 'newsentry', component: NewsEntryComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
