import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
// import { tasks } from '../../../data/tasks';
import { DUMMY_USERS } from '../../../data/users';
import { NewTaskComponent } from './new-task/new-task.component';
@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({ required: true }) username?: string //? tells angular this might not be set to a value
  // @Input() username: string | undefined // create a union to handle undefined values
  @Input({ required: true }) id?: string
  addNewTask: boolean = false;
  tasks = [{
    id: 't1',
    userId: 'u1',
    title: 'Master Angular',
    summary:
      'Learn all the basic and advanced features of Angular & how to apply them.',
    dueDate: '2025-12-31',
  },
  {
    id: 't2',
    userId: 'u3',
    title: 'Build first prototype',
    summary: 'Build a first prototype of the online shop website',
    dueDate: '2024-05-31',
  },
  {
    id: 't3',
    userId: 'u3',
    title: 'Prepare issue template',
    summary:
      'Prepare and describe an issue template which will help with project management',
    dueDate: '2024-06-15',
  },]
  get userTasks() {

    return this.tasks.filter((task) => task.userId == this.id)
  }

  onCompleteTasks(id: string) {
    this.tasks = this.tasks.filter((task) => task.id != id)
  }

  onAddNewTask() {
    this.addNewTask = true
  }

  onHandleInput(newTask: string) {
    console.log(newTask)
  }

  onCancelAddTask() {
    this.addNewTask = false
  }
}
