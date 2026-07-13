import { Component, computed, inject, input } from '@angular/core';
import { TaskService } from '../task-service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-task-detail',
  imports: [],
  templateUrl: './task-detail.html',
  styleUrl: './task-detail.css',
})
export class TaskDetail {

  // capturing the id with modern approach

  private taskDetailInstance = inject(TaskService);
  private router = inject(Router);

  id = input<string>();
  taskDetail = computed(()=>
    // console.log("this is taskdetails.....",this.taskDetailInstance.taskData));
this.taskDetailInstance.taskData().find(t=>t.id==this.id()))

backToTasks(){
this.router.navigate(['/tasks']);
}

}
