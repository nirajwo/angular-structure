import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTaskComponent } from 'src/app/components/add-task/add-task.component';

const routes: Routes = [
	{ path: '', component: AddTaskComponent }
];

export const ADD_TASK_COMPONENT_ROUTES: ModuleWithProviders<any> = RouterModule.forChild(routes);