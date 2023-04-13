import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateTaskComponent } from 'src/app/components/update-task/update-task.component';

const routes: Routes = [
	{ path: '', component: UpdateTaskComponent }
];

export const UPDATE_TASK_COMPONENT_ROUTES: ModuleWithProviders<any> = RouterModule.forChild(routes);