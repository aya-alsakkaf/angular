import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { tasks } from '../../../data/tasks';
import { DUMMY_USERS } from '../../../data/users';
@Component({
  selector: 'app-tasks',
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({ required: true }) username?: string //? tells angular this might not be set to a value
  // @Input() username: string | undefined // create a union to handle undefined values
  @Input({ required: true }) id?: string
  get userTasks() {

    return tasks.filter((task) => task.userId == this.id)
  }
}
