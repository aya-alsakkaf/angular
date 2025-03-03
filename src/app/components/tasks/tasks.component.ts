import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
// import { tasks } from '../../../data/tasks';
import { DUMMY_USERS } from '../../../data/users';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTask } from './task/task.model';
import { TasksService } from './tasks.service';
import { tasks } from '../../../data/tasks';

@Component({
  selector: 'app-tasks',
  standalone: false,
  // imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({ required: true }) username!: string //? tells angular this might not be set to a value
  // @Input() username: string | undefined // create a union to handle undefined values
  @Input({ required: true }) id!: string
  addNewTask: boolean = false;
  private tasksService = new TasksService()

  /**
   * private tasksService = new TasksService() 

   * the problem with creating an instance, the data wouldn't be consisted across the app
   * since we have to use different instances in different parts of the application
   * Therefor, we result in dependency injection
   */

  constructor(tasksService: TasksService) { //like donet mvc
    this.tasksService = tasksService
  } //dependency injection: you tell angular which type of value you need and angular creates it and provides it as an argument

  get userTasks() {

    return this.tasksService.getUserTasks(this.id)
  }

  onCompleteTasks(id: string) {
    this.tasksService.removeTask(id)
  }

  onAddNewTask() {
    this.addNewTask = true
  }

  onHandleInput(newTask: string) {
    console.log(newTask)
  }

  onCloseAddTask() {
    this.addNewTask = false
  }

}
