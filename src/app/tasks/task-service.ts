import { Injectable, signal, effect } from '@angular/core';
import{ Task } from '../tasks/task.model'

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  
   //empty array
  taskData = signal<Task[]>(
    JSON.parse(localStorage.getItem('tasks') || '[]')
  );

    constructor() {
    effect(() => {
      localStorage.setItem('tasks', JSON.stringify(this.taskData()));
    });
  }
  
  addTask(task:Task){
this.taskData.update(current => [...current, task]);
  }
}
