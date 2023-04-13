import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewTaskComponent } from 'src/app/components/view-task/view-task.component';

const routes: Routes = [
	{ path: '', component: ViewTaskComponent }
];

export const VIEW_TASK_COMPONENT_ROUTES: ModuleWithProviders<any> = RouterModule.forChild(routes);