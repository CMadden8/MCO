import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, NgForm } from '@angular/forms';

import { userSelectionComponent } from './user-data-section/user-data-section.component';
import { userDataBarchartComponent } from './user-data-section/user-data-barchart/user-data-barchart.component';
import { userDataGeneralInfoComponent } from './user-data-section/user-data-general-info/user-data-general-info.component';
import { userDataTableComponent } from './user-data-section/user-data-table/user-data-table.component';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    userSelectionComponent,
    userDataBarchartComponent,
    userDataGeneralInfoComponent,
    userDataTableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
