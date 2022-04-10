import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MfeErrorComponent } from './mfe-error.component';

@NgModule({
  declarations: [MfeErrorComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: MfeErrorComponent,
      },
    ]),
  ],
  providers: [],
})
export class MfeErrorModule {}
