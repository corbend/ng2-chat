import {Component} from 'angular2/core';
import {MessageBlock} from './message-block';
import {MessageEditor} from './message-editor';

@Component({
	templateUrl: '/partials/single-chat.html'
	selector: 'single-chat',
	directives: [MessageBlock, MessageEditor]
})
class SingleChat {
	constructor() {}
}