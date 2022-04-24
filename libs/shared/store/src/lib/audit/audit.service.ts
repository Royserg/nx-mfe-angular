import { Injectable } from '@angular/core';
import { AuditQuery } from './audit.query';
import { AuditStore } from './audit.store';

@Injectable({
  providedIn: 'root',
})
export class AuditService {
  constructor(private auditStore: AuditStore, private auditQuery: AuditQuery) {}

  addEntry(description: string): void {
    const entryCount = this.auditQuery.getCount();

    this.auditStore.add({
      id: entryCount + 1,
      description,
    });
  }

  resetStore(): void {
    this.auditStore.reset();
  }
}
