import { TodoService } from '@angular-mfe/shared/store';
import { Component } from '@angular/core';

@Component({
  selector: 'angular-mfe-todo-entry',
  template: `<div class="remote-entry">
      <h2>TODO App</h2>
    </div>

    <div class="divider"></div>

    <div>
      <form class="todo-form" (ngSubmit)="addTodo()">
        <label>
          Todo:
          <input
            type="text"
            name="todo"
            placeholder="Todo"
            [(ngModel)]="todo"
          />
        </label>
        <button type="submit">Save</button>
      </form>
    </div>

    <div class="divider"></div>

    <div>
      <h4>Todos</h4>

      <ul>
        <ng-container *ngFor="let todo of todos$ | async">
          <li>{{ todo.name }}</li>
        </ng-container>
      </ul>
    </div> `,
  styles: [
    `
      .remote-entry {
        background-color: #143055;
        color: white;
        padding: 5px;
      }

      .divider {
        margin-bottom: 2rem;
      }
    `,
  ],
})
export class RemoteEntryComponent {
  todo = '';
  todos$ = this.todoService.todos$;

  constructor(private todoService: TodoService) {}

  addTodo() {
    this.todoService.addTodo({ name: this.todo });
    this.todo = '';
  }
}
