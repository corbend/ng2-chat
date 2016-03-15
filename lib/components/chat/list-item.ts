import {Component} from 'angular2/core';
import {ChatListItem} from './list-item';
import {Chat} from '../models/chat';

@Component({
	templateUrl: '/partials/chat-list-item.html'
	selector: 'chat-list-item'
})
class ChatList {
	@Input chat: Chat
	constructor() {}
	joinChat(event) {
		this.chat.id
	}
}