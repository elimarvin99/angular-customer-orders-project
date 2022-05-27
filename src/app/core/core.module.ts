import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { DataService } from './data.service';
import { SorterService } from './sorter.service';

@NgModule({
  imports: [],
  providers: [ DataService, SorterService ], // a provider is like an injection container. the chef that gets request from the waiter (injected service) to bring to patron - component that made the request
})
export class CoreModule {}
