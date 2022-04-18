import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface UserState {
  name: string;
}

export const createInitialState = (): UserState => {
  return {
    name: '',
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
