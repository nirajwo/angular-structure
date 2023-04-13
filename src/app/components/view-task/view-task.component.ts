import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/service/task.service';
import Swal from 'sweetalert2'
// import '@vaadin/vaadin-grid';
// import '@vaadin/vaadin-button';


@Component({
	selector: 'app-view-task',
	templateUrl: './view-task.component.html',
	styleUrls: ['./view-task.component.scss']
})
export class ViewTaskComponent implements OnInit {

	taskList: any = [];

	constructor(private router: Router, private taskService: TaskService) { }

	async ngOnInit() {
		//get all the tasks when page loads
		this.getListOfTasks();
	}

	/**
	* Navigate route to add component 
	*/
	add() {
		this.router.navigate(['addTask']);
	}

	/**
	* Navigate route to edit component 
	*/
	edit(id: number) {
		this.router.navigate(['updateTask', id]);
	}

	/**
	* Delete a task by id
	*/
	delete(id: number) {
		Swal.fire({
			title: 'Are you sure?',
			text: "You want to delete this task",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, delete it!'
		}).then((result) => {
			if (result.isConfirmed) {
				//call delete api to delete a task by id
				this.taskService.deleteTask(id).subscribe(
					data => {
						Swal.fire(
							'Deleted!',
							'Task has been deleted.',
							'success'
						)
						//get all the tasks after delete operation
						this.getListOfTasks();
					},
					error => {
						console.log(error),
							Swal.fire(
								'Can not Deleted!',
								error.message,
								'error'
							)
					});
			} else {
				this.getListOfTasks();
			}
		})

	}

	getListOfTasks() {

		//get a list of all tasks
		this.taskService.getAllTasks()
			.subscribe(data => {
				this.taskList = data;
			},
				error => console.log(error));
	}
}
