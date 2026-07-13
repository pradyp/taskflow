import { Component, inject, input, Input, output, signal } from '@angular/core';
import { Task } from '../task.model';
import { TaskService } from '../task-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-task-card',
  imports: [RouterLink],
  templateUrl: './task-card.html',
  styleUrl: './task-card.css',
})
export class TaskCard {

  // @Input() taskCard:string = '';
  taskCard = input.required<Task>();
  markAsDoneEvent = output<Task>();
  private test = inject(TaskService);

  // updateSignal = signal<Task|null>(null);
  

  markAsDone(){
    const cardId = this.taskCard().id;
    this.test.taskData.update(a=> a.map(cu => cu.id == cardId ? {...cu, status:'done'}: cu));
    // this.markAsDoneEvent.emit();
  }

  dleteCard(){
     const cardId = this.taskCard().id;
    this.test.taskData.update(a=>a.filter(cu=>cu.id != cardId));
  }
}
