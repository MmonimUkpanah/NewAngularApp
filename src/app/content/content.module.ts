import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';



@NgModule({
  declarations: [
    DashboardComponent,
    FormComponent,
    TableComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ContentModule { }
