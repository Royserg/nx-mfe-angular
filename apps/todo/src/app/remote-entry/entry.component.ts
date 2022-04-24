import { TodoQuery, TodoService } from '@angular-mfe/shared/store';
import { Component } from '@angular/core';

@Component({
  selector: 'angular-mfe-todo-entry',
  template: `
    <h2 class="app-header">TODO MicroFrontend</h2>

    <div class="divider"></div>

    <main>
      <form class="todo-form" (ngSubmit)="addTodo()">
        <label>
          Todo:
          <input
            type="text"
            name="todo"
            placeholder="New todo"
            [(ngModel)]="todo"
          />
        </label>
        <button class="btn submit-btn" type="submit">Save</button>
      </form>

      <div class="divider"></div>

      <div class="todo-list-container">
        <h4 class="todo-list-header">Your todos</h4>

        <ng-container *ngIf="(todos$ | async)!.length > 0; else placeholder">
          <ul>
            <ng-container *ngFor="let todo of todos$ | async">
              <li>{{ todo.name }}</li>
            </ng-container>
          </ul>
        </ng-container>

        <ng-template #placeholder>
          <p>You don't have currently any Todo</p>
        </ng-template>
      </div>
    </main>
  `,
  styleUrls: ['./entry.component.scss'],
})
export class RemoteEntryComponent {
  todo = '';
  todos$ = this.todoQuery.selectAll();

  constructor(private todoService: TodoService, private todoQuery: TodoQuery) {}

  addTodo() {
    this.todoService.addTodo({
      name: this.todo,
      completed: false,
    });

    this.todo = '';
  }
}
