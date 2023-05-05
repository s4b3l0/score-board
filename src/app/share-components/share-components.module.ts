import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemManagementComponent } from './item-management/item-management.component';
import {NbCardModule, NbIconModule} from "@nebular/theme";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";



@NgModule({
  declarations: [
    ItemManagementComponent
  ],
  imports: [
    CommonModule,
    NbCardModule,
    NgxDatatableModule,
    NbIconModule
  ]
})
export class ShareComponentsModule { }
