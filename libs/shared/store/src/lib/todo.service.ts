import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Todo {
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos$ = new BehaviorSubject<Todo[]>([
    {
      name: 'Micro-frontends',
    },
    {
      name: 'Development',
    },
  ]);

  addTodo(newTodo: Todo): void {
    const todos = this.todos$.getValue();
    this.todos$.next([...todos, newTodo]);
  }

  getTodos(): Todo[] {
    return this.todos$.getValue();
  }
}
