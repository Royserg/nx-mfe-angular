import { HttpClient, HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, interval, map, repeatWhen } from 'rxjs';
import { environment as env } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MfeHpCheckService {
  constructor(private http: HttpClient) {}

  hpCheckTodo() {
    return this.isUrlUp(`${env.mfe.todo}/remoteEntry.mjs`);
  }

  hpCheckSettings() {
    return this.isUrlUp(`${env.mfe.settings}/remoteEntry.mjs`);
  }

  isUrlUp(url: string) {
    return this.http
      .get(url, {
        observe: 'response',
        responseType: 'text',
      })
      .pipe(
        map((res) => {
          if (res.status !== HttpStatusCode.Ok) {
            return false;
          }
          return true;
        }),
        catchError(async () => false),
        repeatWhen(() => interval(5000))
      );
  }
}
