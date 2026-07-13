import { Component, computed, inject, signal } from '@angular/core';
import {
  FormsModule,
  FormBuilder,
  FormGroup,
  FormControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { TaskService } from '../task-service';
import { Task } from '../task.model';
import { TaskCard } from '../task-card/task-card';

@Component({
  selector: 'app-task-list',
  imports: [ReactiveFormsModule, TaskCard],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {
  private fb = inject(FormBuilder);
  private taskInstance = inject(TaskService);
  tasks = this.taskInstance.taskData;

  // readonly total:number = 0;
  totalCount = computed(() => this.tasks().length);

  //for caliculating the length of done.
  done = computed(() => this.tasks().filter((task) => task.status == 'done').length);

  // caliculating the pending

  pending = computed(() => this.tasks().filter((task) => task.status !== 'done').length);

  formHide = signal(true);

  taskForm = this.fb.group({
    taskTitle: [''],
    description: [''],
    status: ['medium'],
  });

  addTask() {
    this.formHide.update((a) => !a);
  }
  onSubmit() {
    const formValues = this.taskForm.value;

    const newTask: Task = {
      id: Date.now().toString(),
      title: formValues.taskTitle || '',
      description: formValues.description || '',
      priority: formValues.status as 'low' | 'medium' | 'high',
      status: 'todo',
      createdAt: new Date(),
    };

    this.taskInstance.addTask(newTask);

    this.taskForm.reset({ status: 'medium' });
    this.formHide.set(true);
  }
}
