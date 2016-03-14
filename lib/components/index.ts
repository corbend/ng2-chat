import {Component}    from 'angular2/core';
import {RegisterForm} from './chat/register';
import {ChatList}     from './chat/list';
import {SingleUserChat} from './chat/single';
import {MultiUserChat} from './chat/multi';

import {RouteConfig, Route, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: "app",
    directives: [ROUTER_DIRECTIVES],
    styles: [require('!raw!autoprefixer?browsers=last 2 versions!sass!./index.scss')],
    template: require('./index.html')
})
@RouteConfig([
    new Route({ path: '/', component: Home, name: 'Home' }),
    new Route({ path: '/register', component: RegisterForm, name: 'Register' }),
    new Route({ path: '/list', component: ChatList, name: 'About' }),
    new Route({ path: '/single', component: SingleUserChat, name: 'SingleChat' }),
    new Route({ path: '/multi', component: DataType, name: 'MultiChat' })
])
export class App {

    constructor() {

    }

}
