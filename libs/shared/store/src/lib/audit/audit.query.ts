import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { AuditEntry, AuditState, AuditStore } from './audit.store';

@Injectable({
  providedIn: 'root',
})
export class AuditQuery extends QueryEntity<AuditState, AuditEntry> {
  constructor(protected override store: AuditStore) {
    super(store);
  }
}
