import { Routes } from '@angular/router';
import { TaskDetail } from './tasks/task-detail/task-detail';
import { ChatBox } from './chats/chat-box/chat-box';

export const routes: Routes = [
    {path:'', redirectTo:'tasks', pathMatch:'full'},
    { path: 'tasks', loadComponent:() => import('./tasks/task-list/task-list').then(m=>m.TaskList)},
    { path: 'taskDetail/:id', component: TaskDetail },
    { path: 'taskDetail', component: TaskDetail },
    { path: 'chat-box', component: ChatBox },
];
