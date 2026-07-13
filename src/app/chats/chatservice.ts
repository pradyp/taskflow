import { Injectable, signal } from '@angular/core';
import { Message } from './chat.model';

@Injectable({
  providedIn: 'root',
})
export class Chatservice {
  
  chatSignal = signal<Message[]>([]);

  addMessage(msg:Message){
    this.chatSignal.update(curntmsg => [...curntmsg, msg]);
  }
}
