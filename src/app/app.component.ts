import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { UserComponent } from './components/user/user.component';
import { DUMMY_USERS } from '../data/users';

@Component({ //decorator, ts feature , which adds meta data to the component
  selector: 'app-root', //the tag that the component will render in it's place
  imports: [HeaderComponent, UserComponent],
  standalone: true,
  templateUrl: './app.component.html', //contains the markup or look 
  styleUrl: './app.component.css', //styling for this component. 
})
export class AppComponent {
  title = 'first-angular-app';
  users = DUMMY_USERS

  onSelectUser(id: string) {
    alert("User has been selected: " + id)

  }
}
