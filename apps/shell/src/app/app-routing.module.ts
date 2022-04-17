import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@nrwl/angular/mfe';
import { AuthGuard } from './guards/auth.guard';

// Helper
const renderMfeErrorModule = () =>
  import('./pages/placeholder/mfe-error/mfe-error.module').then(
    (m) => m.MfeErrorModule
  );

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      loadRemoteModule('login', './Module')
        .then((m) => m.RemoteEntryModule)
        .catch(() => renderMfeErrorModule()),
  },
  {
    path: '',
    canLoad: [AuthGuard],
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'todo',
    canLoad: [AuthGuard],
    canActivate: [AuthGuard],
    loadChildren: () =>
      loadRemoteModule('todo', 'Module')
        .then((m) => m.RemoteEntryModule)
        .catch(() => renderMfeErrorModule()),
  },
  {
    path: 'settings',
    canLoad: [AuthGuard],
    canActivate: [AuthGuard],
    loadChildren: () =>
      loadRemoteModule('settings', './Module')
        .then((m) => m.RemoteEntryModule)
        .catch(() => renderMfeErrorModule()),
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
