import { Component, Input, output, input, computed, signal, Signal, Output, EventEmitter } from '@angular/core';
import { type User } from './user.model';
import { CardComponent } from "../../shared/card/card.component";
// import { DUMMY_USERS } from '../../../data/users';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

// type User = {
//   name: string,
//   id: string,
//   avatar: string
// }



@Component({
  selector: 'app-user',
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  // selectedUser = DUMMY_USERS[randomIndex] //pass the data to the template, 
  // public property so the template can access it. use private keyword so only the class has access to it

  // selectedUser = signal(DUMMY_USERS[randomIndex])

  //getters for computed values
  // public get imagePath(): string {
  //   return 'assets/users/' + this.selectedUser().avatar
  // }

  // imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar)


  // ---------------------------------------------------------------------------

  // accepting component input (props)
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;
  // @Input({ required: true }) id!: string

  //accepting objects as input
  @Input({ required: true }) user!: User
  @Output() select = new EventEmitter<string>(); //will allow us to emit custom values to any parent component i.e app component
  @Input({ required: true }) selected!: boolean;
  // select = output<string>() //using output function instead of decorator
  public get imagePath(): string {
    return 'assets/users/' + this.user.avatar
  }


  // accepting input to the component as signals

  // avatar = input.required<string>()
  // name = input<string>()

  // imagePath = computed(() => 'assets/users/' + this.avatar())


  //event binding, event listeners and event handlers
  onSelectUser() {
    // console.log(`${this.selectedUser.name} Selected`);
    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

    //state -> data that will have an effect on the state of UI 
    // this.selectedUser = DUMMY_USERS[randomIndex] // now the user gets changed everytime the user button is clicked. 

    // this.selectedUser.set(DUMMY_USERS[randomIndex]) //setter function to change the signal value


    //--------------------------------- emitting the vlaue to the parent components
    this.select.emit(this.user.id)
  }



}
