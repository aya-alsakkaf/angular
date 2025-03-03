import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  // imports: [FormsModule],
  standalone: false,
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string
  @Output() close = new EventEmitter<void>();
  enteredTitle = "";
  enteredSummary = ""
  enteredDueDate = ""
  private tasksService = inject(TasksService)

  onCancel() {
    this.close.emit()
  }

  handleSubmit() {
    this.tasksService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDueDate
    }, this.userId)
    this.close.emit()
  }
}
