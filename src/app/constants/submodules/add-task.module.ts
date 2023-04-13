import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ADD_TASK_COMPONENT_ROUTES } from '../subroutes/add-task.routing';
import { AddTaskComponent } from 'src/app/components/add-task/add-task.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from 'ckeditor4-angular';


@NgModule({
  declarations: [
    AddTaskComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ADD_TASK_COMPONENT_ROUTES,
    RouterModule,
    ReactiveFormsModule,
    CKEditorModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AddTaskComponent]
})
export class AddTaskModule { }
