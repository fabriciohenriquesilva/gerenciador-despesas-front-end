import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SidebarComponent} from './sidebar/sidebar.component';
import {PaginationComponent} from './pagination/pagination.component';
import {AppRoutingModule} from 'src/app/app-routing.module';

@NgModule({
  declarations: [
    PaginationComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [SidebarComponent, PaginationComponent]
})
export class NavigationModule {
}
