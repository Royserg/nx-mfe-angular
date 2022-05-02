import { UserQuery } from '@angular-mfe/shared/store';
import { Component } from '@angular/core';

@Component({
  selector: 'angular-mfe-settings-entry',
  template: `
    <h2 class="mb-1">Settings</h2>

    <p class="mb-1">Placeholder Settings Micro Frontend</p>
    <h3 class="user-details">Username: {{ username$ | async }}</h3>
  `,
  styles: [
    `
      .mb-1 {
        margin-bottom: 1rem;
      }

      .user-details {
        border: 1px solid orangered;
      }
    `,
  ],
})
export class RemoteEntryComponent {
  username$ = this.userQuery.select('name');

  constructor(private userQuery: UserQuery) {}
}
