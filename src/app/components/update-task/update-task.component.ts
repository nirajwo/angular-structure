import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from 'src/app/service/task.service';

@Component({
	selector: 'app-update-task',
	templateUrl: './update-task.component.html',
	styleUrls: ['./update-task.component.scss']
})
export class UpdateTaskComponent implements OnInit {

	taskList: any = [];

	constructor(private route: ActivatedRoute, private router: Router, private taskService: TaskService) { }

	/**
	* FormGroup for edit form
	*/
	editForm = new FormGroup({
		id: new FormControl('', [Validators.required]),
		name: new FormControl('', [Validators.required]),
		description: new FormControl('', [Validators.maxLength(2000)]),
		summary: new FormControl(''),
	});

	ngOnInit(): void {
		//get task by id
		this.getTaskById(this.route.snapshot.params['id']);
	}

	/**
	* Get a task by id
	*/
	getTaskById(id: number) {
		this.taskService.getTaskById(this.route.snapshot.params['id'])
			.subscribe(data => {
				this.taskList = data;
			},
				error => console.log(error));
	}

	/**
	* Update a task by id 
	*/
	updateTask() {
		//set value of id to update
		this.editForm.controls['id'].setValue(this.taskList.id);

		//save task only if edit form is valid
		if (this.editForm.valid) {
			this.taskService.saveTask(this.editForm.value).subscribe(
				data => {
					this.router.navigate(['viewTask']);
				},
				error => console.log(error));
		}
	}

	/**
	* Navigate route to view page
	*/
	cancel() {
		this.router.navigate(['viewTask']);
	}

}
