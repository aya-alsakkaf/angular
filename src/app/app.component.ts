import { Component, EventEmitter, Output, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { UserComponent } from './components/user/user.component';
import { DUMMY_USERS } from '../data/users';
import { TasksComponent } from "./components/tasks/tasks.component";

@Component({ //decorator, ts feature , which adds meta data to the component
  selector: 'app-root', //the tag that the component will render in it's place
  imports: [HeaderComponent, UserComponent, TasksComponent],
  standalone: true,
  templateUrl: './app.component.html', //contains the markup or look 
  styleUrl: './app.component.css', //styling for this component. 
})
export class AppComponent {
  title = 'first-angular-app';
  users = DUMMY_USERS

  selectedUserId = "u1"

  get selectedUser() {
    return this.users.find((user) => user.id == this.selectedUserId)
  }
  onSelectUser(id: string) {
    // alert("test " + id)
    this.selectedUserId = id
  }
}
