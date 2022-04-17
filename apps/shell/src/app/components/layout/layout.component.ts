import { UserService } from '@angular-mfe/shared/data-access-user';
import { Component } from '@angular/core';

@Component({
  selector: 'angular-mfe-layout',

  template: `
    <nav class="navbar">
      <div class="navbar-logo" routerLink="/">Home</div>

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
  isLoggedIn$ = this.userService.isUserLoggedIn$;

  constructor(private userService: UserService) {}

  logout(): void {
    this.userService.logout();
  }
}
