import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@nrwl/angular/mfe';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      loadRemoteModule('login', './Module')
        .then((m) => m.RemoteEntryModule)
        .catch(() =>
          import('./pages/placeholder/mfe-error/mfe-error.module').then(
            (m) => m.MfeErrorModule
          )
        ),
  },
  {
    path: 'todo',
    loadChildren: () =>
      loadRemoteModule('todo', './Module')
        .then((m) => m.RemoteEntryModule)
        .catch(() =>
          import('./pages/placeholder/mfe-error/mfe-error.module').then(
            (m) => m.MfeErrorModule
          )
        ),
  },
  {
    path: 'settings',
    loadChildren: () =>
      loadRemoteModule('settings', './Module')
        .then((m) => m.RemoteEntryModule)
        .catch(() =>
          import('./pages/placeholder/mfe-error/mfe-error.module').then(
            (m) => m.MfeErrorModule
          )
        ),
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
