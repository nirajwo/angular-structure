import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { UPDATE_TASK_COMPONENT_ROUTES } from '../subroutes/update-task.routing';
import { UpdateTaskComponent } from 'src/app/components/update-task/update-task.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from 'ckeditor4-angular';


@NgModule({
  declarations: [
    UpdateTaskComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    UPDATE_TASK_COMPONENT_ROUTES,
    RouterModule,
    ReactiveFormsModule,
    CKEditorModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [UpdateTaskComponent]
})
export class UpdateTaskModule { }
