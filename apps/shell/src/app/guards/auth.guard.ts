import { UserQuery } from '@angular-mfe/shared/store';
import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { distinctUntilChanged, firstValueFrom, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad, CanActivate {
  constructor(private router: Router, private userQuery: UserQuery) {}

  canActivate(): Observable<boolean> {
    return this.userQuery.isLoggedIn$.pipe(
      distinctUntilChanged(),
      map((isLoggedIn) => {
        if (!isLoggedIn) {
          this.router.navigateByUrl('/login');
          return false;
        }

        return true;
      })
    );
  }

  async canLoad() {
    const isLoggedIn = await firstValueFrom(this.userQuery.isLoggedIn$);

    if (!isLoggedIn) {
      this.router.navigateByUrl('/login');
      return false;
    }

    return true;
  }
}
