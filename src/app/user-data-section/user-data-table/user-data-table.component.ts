import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';

import { User } from '../../types/user.type';

@Component({
  selector: "mco-user-data-table",
  templateUrl: "./user-data-table.component.html",
  styleUrls: ["./user-data-table.component.scss"]
})

export class userDataTableComponent implements OnChanges {

  public selectedUser:User;

  public userRowsDisplayed: Array<any>;
  public rowCount:number = 10; // default number of rows displayed
  public defaultRowCount:number = 10; // default number for the dropdown menu
  public rowCountCap:number = 40; // dropdown menu cap for max amount of rows to be displayed

  @Input() users:User;

  @Output() userSelect:EventEmitter<any> = new EventEmitter<any>();

  ngOnChanges(changes): void {

    // users is empty on first change, so wait until the next change

    if (changes.users.firstChange === false) {

      this.selectedUser = changes.users.currentValue[0];
    
      this.userRowsDisplayed = this.showRows(changes.users.currentValue.length);

    }  

  }

  /*
   * Fires after a user is selected from the table
   * emits the value of the selected user for use in userSelectionComponent
   */

  onSelect(user: User): void {

    this.selectedUser = user;

    this.userSelect.emit(user);
   
  }

  /*
   * Fires when the user changes the number of rows from the dropdown
   */

  changeRowsDisplayed(value:number) {

    this.rowCount = value;
  
  }


  /*
   * Used for adding new rows via the dropdown - capped at 40
   * and also for showing the initial first 10 rows
   */

  showRows(numberOfRows:number):Array<any> {

    let rows = [];  
    let i; 

    for (i = 10; i < numberOfRows - 10; i++) {
      if (i % 10 == 0 && i <= this.rowCountCap) {
        rows.push(i);
      }
      
    }

    return rows;
  }
  

}