import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { distinctUntilChanged } from 'rxjs/operators';

import { UserService } from '@angular-mfe/shared/data-access-user';

@Component({
  selector: 'angular-mfe-root',

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
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isLoggedIn$ = this.userService.isUserLoggedIn$;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.isLoggedIn$.pipe(distinctUntilChanged()).subscribe((loggedIn) => {
      // if (!loggedIn) {
      //   this.router.navigateByUrl('login');
      // } else {
      //   this.router.navigateByUrl('');
      // }
    });
  }

  logout(): void {
    this.userService.logout();
  }
}
