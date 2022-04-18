import { Injectable } from '@angular/core';
import { Todo, TodoStore } from './todo.store';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private todoStore: TodoStore) {}

  addTodo(newTodo: Todo): void {
    // Generate id for new entity
    if (!newTodo.id) {
      newTodo.id = uuid();
    }

    this.todoStore.add(newTodo);
  }

  resetStore(): void {
    this.todoStore.reset();
  }
}
