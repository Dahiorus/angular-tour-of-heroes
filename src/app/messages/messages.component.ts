import { Component } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'hero-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {

  constructor(public messageService: MessageService) { }
}
