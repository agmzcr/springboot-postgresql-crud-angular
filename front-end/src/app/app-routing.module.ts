import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDelUpdateComponent } from './components/add-del-update/add-del-update.component';
import { ListUsersComponent } from './components/list-users/list-users.component';

const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users', component: ListUsersComponent },
  { path: 'add', component: AddDelUpdateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
