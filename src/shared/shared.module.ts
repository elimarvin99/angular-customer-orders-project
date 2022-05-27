import { NgModule } from '@angular/core';
import { CapitalizePipe } from './capitalize.pipe';

@NgModule({
  // declarations are for pipes, components or directives
  declarations: [CapitalizePipe],
  exports: [CapitalizePipe],
})
export class SharedModule {}
