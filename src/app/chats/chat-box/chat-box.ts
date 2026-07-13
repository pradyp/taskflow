import { Component, inject, signal } from '@angular/core';
import { Chatservice } from '../chatservice';
import { Message } from '../chat.model';

@Component({
  selector: 'app-chat-box',
  imports: [],
  templateUrl: './chat-box.html',
  styleUrl: './chat-box.css',
})
export class ChatBox {

  private chatService = inject(Chatservice);
  msgs = this.chatService.chatSignal

  userTyping = signal(false);

inputValue(val:HTMLInputElement){
this.chatService.addMessage({
  id:  Date.now().toString(),
  text: val.value,
  sender: 'user'
});
val.value="";
this.userTyping.update((a) => !a);
  }
}
