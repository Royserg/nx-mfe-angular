import { UserQuery, UserService } from '@angular-mfe/shared/store';
import { Component } from '@angular/core';

@Component({
  selector: 'angular-mfe-layout',

  template: `
    <nav class="navbar">
      <div class="navbar-logo" routerLink="/">Home</div>

      <div>name: {{ name$ | async }}</div>

      <ng-container *ngIf="isLoggedIn$ | async">
        <div class="logout-btn" (click)="logout()">Logout</div>
      </ng-container>
    </nav>

    <div class="divider"></div>

    <section class="main-container">
      <router-outlet></router-outlet>
    </section>
  `,
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  isLoggedIn$ = this.userQuery.isLoggedIn$;
  name$ = this.userQuery.name$;

  constructor(private userQuery: UserQuery, private userService: UserService) {}

  logout(): void {
    this.userService.logout();
  }
}
