import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DebounceComponent } from './components/debounce/debounce.component';
import { ObservablesComponent } from './components/observables/observables.component';

import {DashboardComponent} from './components/layout/dashboard.component';
import {UsersComponent} from './containers/users.component';
import {PostComponent} from './containers/posts.component';

const routes: Routes = [
  {path:'observables',component:ObservablesComponent},
  {path:'debounce',component:DebounceComponent},
  {path: '', component: DashboardComponent,
  children: [
    {path: '', component: UsersComponent},
    {path: 'post', component: PostComponent},
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
