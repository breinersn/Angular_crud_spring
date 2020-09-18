import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonDeleteComponent } from './person-delete/person-delete.component';
import { MaterialModule } from '../material/material.module';
import { FormAddComponent } from './form-add/form-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PersonEditComponent } from './person-edit/person-edit.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { DemoModule } from '../demo/demo.module';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [PersonListComponent, PersonDeleteComponent, FormAddComponent, PersonEditComponent, LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    DemoModule
  ]
})
export class ComponentsModule { }
