import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import '@vaadin/vaadin-button';
// import '@vaadin/vaadin-grid';
// import '@vaadin/vaadin-text-field';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TaskService } from 'src/app/service/task.service';


@Component({
	selector: 'app-add-task',
	templateUrl: './add-task.component.html',
	styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

	constructor(private router: Router, private taskService: TaskService) { }

	/**
	* FormGroup for add form
	*/
	addForm = new FormGroup({
		name: new FormControl('', [Validators.required]),
		description: new FormControl('', [Validators.maxLength(2000)]),
		summary: new FormControl(''),
	});

	ngOnInit(): void {
	}

	/**
	* Add a new task
	*/
	addTask() {
		if (this.addForm.valid) {

			this.taskService.saveTask(this.addForm.value).subscribe(
				data => {
					this.router.navigate(['viewTask']);
					console.log(data);
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
