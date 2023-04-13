import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ViewTaskComponent } from 'src/app/components/view-task/view-task.component';
import { VIEW_TASK_COMPONENT_ROUTES } from '../subroutes/view-task.routing';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ViewTaskComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    VIEW_TASK_COMPONENT_ROUTES,
    RouterModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [ViewTaskComponent]
})
export class ViewTaskModule { }
