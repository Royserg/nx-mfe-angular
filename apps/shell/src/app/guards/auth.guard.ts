import { UserService } from '@angular-mfe/shared/data-access-user';
import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { distinctUntilChanged, firstValueFrom, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad, CanActivate {
  constructor(private router: Router, private userService: UserService) {}

  canActivate(): Observable<boolean> {
    return this.userService.isUserLoggedIn$.pipe(
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
    const isLoggedIn = await firstValueFrom(this.userService.isUserLoggedIn$);

    if (!isLoggedIn) {
      this.router.navigateByUrl('/login');
      return false;
    }

    return true;
  }
}
