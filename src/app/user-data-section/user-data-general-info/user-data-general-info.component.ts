import { Component, Input, OnChanges } from '@angular/core';

import { User } from '../../types/user.type';

@Component({
  selector: "mco-user-data-general-info",
  templateUrl: "./user-data-general-info.component.html",
  styleUrls: ["./user-data-general-info.component.scss"]
})

export class userDataGeneralInfoComponent implements OnChanges {

  @Input() user:User;

  ngOnChanges(changes): void {
 
    
  }
  

}