import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tasks',
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input() username?: string //? tells angular this might not be set to a value
  // @Input() username: string | undefined // create a union to handle undefined values
}
