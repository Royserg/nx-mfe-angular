import { Component } from '@angular/core';

@Component({
  selector: 'angular-mfe-todo-entry',
  template: `<div class="remote-entry">
    <h2>TODO App</h2>
  </div>`,
  styles: [
    `
      .remote-entry {
        background-color: #143055;
        color: white;
        padding: 5px;
      }
    `,
  ],
})
export class RemoteEntryComponent {}
