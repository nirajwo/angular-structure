import { RouterModule, Routes } from '@angular/router';

//consts that indicates different routes 
export const viewTask = 'viewTask';
export const addTask = 'addTask';
export const updateTask = 'updateTask';

/**
 * load modules according to routes
 */
export const routes: Routes = [
	{
		path: "", loadChildren: () => import('./submodules/view-task.module')
			.then(mod => mod.ViewTaskModule)
	},
	{
		path: viewTask, loadChildren: () => import('./submodules/view-task.module')
			.then(mod => mod.ViewTaskModule)
	},
	{
		path: addTask, loadChildren: () => import('./submodules/add-task.module')
			.then(mod => mod.AddTaskModule)
	},
	{
		path: "updateTask/:id", loadChildren: () => import('./submodules/update-task.module')
			.then(mod => mod.UpdateTaskModule)
	},
];