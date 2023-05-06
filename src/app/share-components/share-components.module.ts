import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemManagementComponent } from './item-management/item-management.component';
import {NbButtonModule, NbCardModule, NbIconModule, NbInputModule} from "@nebular/theme";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";



@NgModule({
  declarations: [
    ItemManagementComponent
  ],
  imports: [
    CommonModule,
    NbButtonModule,
    NbInputModule,
    NbCardModule,
    NgxDatatableModule,
    NbIconModule
  ]
})
export class ShareComponentsModule { }
