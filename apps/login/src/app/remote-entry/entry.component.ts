import { Component, OnInit } from '@angular/core';
import { UserQuery, UserService } from '@angular-mfe/shared/store';
import { distinctUntilChanged } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'angular-mfe-login-entry',
  template: `
    <main class="login-container">
      <div class="hint">
        <p>username: <code>demo</code></p>
        <p>password: <code>demo</code></p>
      </div>

      <form class="login-form" (ngSubmit)="login()">
        <label class="mb-1">
          Username:
          <input
            type="text"
            placeholder="Username"
            name="username"
            [(ngModel)]="username"
          />
        </label>

        <label class="mb-1">
          Password:
          <input
            type="password"
            placeholder="Password"
            name="password"
            [(ngModel)]="password"
          />
        </label>

        <button type="submit" class="submit-btn">Login</button>
      </form>
    </main>
  `,
  styleUrls: ['./entry.component.scss'],
})
export class RemoteEntryComponent implements OnInit {
  username = '';
  password = '';

  constructor(
    private userQuery: UserQuery,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userQuery.isLoggedIn$
      .pipe(distinctUntilChanged())
      .subscribe((isLoggedIn) => {
        if (isLoggedIn) {
          this.router.navigateByUrl('/');
        }
      });
  }

  login() {
    this.userService.checkCredentials(this.username, this.password);
  }
}
