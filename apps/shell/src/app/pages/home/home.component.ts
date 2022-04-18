import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, distinctUntilChanged, Subscription } from 'rxjs';
import { MfeHpCheckService } from '../../services';
// import { UserService } from '@angular-mfe/shared/data-access-user';
import { TodoQuery, TodoService } from '@angular-mfe/shared/store';

@Component({
  selector: 'angular-mfe-shell-home',
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  todoServiceSubscription: Subscription | undefined;
  settingsServiceSubscription: Subscription | undefined;

  todoService$ = new BehaviorSubject(false);
  settingsService$ = new BehaviorSubject(false);

  todos$ = this.todoQuery.selectAll();

  constructor(
    private readonly mfeHpCheck: MfeHpCheckService,
    private todoQuery: TodoQuery
  ) {}

  ngOnInit(): void {
    this.todoServiceSubscription = this.mfeHpCheck
      .hpCheckTodo()
      .pipe(distinctUntilChanged())
      .subscribe((isUp) => {
        this.todoService$.next(isUp);
      });

    this.settingsServiceSubscription = this.mfeHpCheck
      .hpCheckSettings()
      .pipe(distinctUntilChanged())
      .subscribe((isUp) => {
        this.settingsService$.next(isUp);
      });
  }

  ngOnDestroy(): void {
    this.todoServiceSubscription?.unsubscribe();
    this.settingsServiceSubscription?.unsubscribe();
  }
}
