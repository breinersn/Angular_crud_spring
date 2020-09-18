import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonDeleteComponent } from './person-delete/person-delete.component';
import { FormAddComponent } from './form-add/form-add.component';
import { PersonEditComponent } from './person-edit/person-edit.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'list', component: PersonListComponent},
  {path: 'add', component: FormAddComponent},
  {path: 'edit', component: PersonEditComponent},
  {path: 'delete', component: PersonDeleteComponent},
  {path: 'login', component: LoginComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'login' }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
