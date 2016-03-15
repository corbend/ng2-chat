import {Component} from 'angular2/core';
import {ChatListItem} from './list-item';

@Component({
	templateUrl: '/partials/chat-list.html'
	selector: 'chat-list',
	directives: [ChatListItem]
})
class ChatList {
	constructor() {}
}