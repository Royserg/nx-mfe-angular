import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { Todo, TodoState, TodoStore } from './todo.store';

@Injectable({
  providedIn: 'root',
})
export class TodoQuery extends QueryEntity<TodoState, Todo> {
  filter$ = this.select('filter');

  constructor(protected override store: TodoStore) {
    super(store);
  }
}
