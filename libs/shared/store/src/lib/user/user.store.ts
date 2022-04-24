import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { LOCAL_STORAGE_USER } from './constants';

export interface UserState {
  isLoggedIn: boolean;
  name: string;
}

export const createInitialState = (): UserState => {
  const user = localStorage.getItem(LOCAL_STORAGE_USER);

  return {
    isLoggedIn: !!user,
    name: user ? user : '',
  };
};

@Injectable({
  providedIn: 'root',
})
@StoreConfig({ name: 'user', resettable: true })
export class UserStore extends Store<UserState> {
  constructor() {
    super(createInitialState());
  }
}
