import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { UserStore, UserState } from './user.store';

@Injectable({
  providedIn: 'root',
})
export class UserQuery extends Query<UserState> {
  isLoggedIn$ = this.select('isLoggedIn');
  name$ = this.select('name');

  constructor(store: UserStore) {
    super(store);
  }
}
