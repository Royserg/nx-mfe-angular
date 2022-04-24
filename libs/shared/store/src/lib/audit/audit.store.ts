import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

export interface AuditEntry {
  id?: number;
  description: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AuditState extends EntityState<AuditEntry, number> {}

@Injectable({
  providedIn: 'root',
})
@StoreConfig({ name: 'audit', resettable: true })
export class AuditStore extends EntityStore<AuditState> {
  constructor() {
    super();
  }
}
