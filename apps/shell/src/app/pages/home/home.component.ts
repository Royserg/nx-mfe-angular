import { AuditQuery } from '@angular-mfe/shared/store';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, distinctUntilChanged, Subscription } from 'rxjs';
import { MfeHpCheckService } from '../../services';

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

  auditEntries$ = this.auditQuery.selectAll();

  constructor(
    private readonly mfeHpCheck: MfeHpCheckService,
    private auditQuery: AuditQuery
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
