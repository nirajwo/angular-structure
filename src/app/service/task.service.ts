import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private http: HttpClient) {}
  // API url
  baseUrl: string = 'http://localhost:8080/';

  saveTask(task: Task) {
    return this.http.post(this.baseUrl + 'saveTask', task);
  }

  getAllTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.baseUrl + 'getAllTasks');
  }

  deleteTask(id: number) {
    return this.http.delete(this.baseUrl + 'deleteTask/' + id);
  }

  getTaskById(id: number) {
    return this.http.get(this.baseUrl + 'getTaskById/' + id);
  }
}
