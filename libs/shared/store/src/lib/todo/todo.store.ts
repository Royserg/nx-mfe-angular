import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

export interface Todo {
  id?: string;
  name: string;
  completed: boolean;
}

export interface TodoState extends EntityState<Todo, number> {
  filter: 'ALL' | 'COMPLETED' | 'ACTIVE';
}

@Injectable({
  providedIn: 'root',
})
@StoreConfig({ name: 'todos', resettable: true })
export class TodoStore extends EntityStore<TodoState> {
  constructor() {
    super({ filter: 'ALL' });
  }
}
