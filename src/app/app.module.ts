import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './content/table/table.component';
import { FormComponent } from './content/form/form.component';
import { DashboardComponent } from './content/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    FormComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
