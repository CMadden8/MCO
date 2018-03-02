import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import { SlicePipe } from '@angular/common';
import { NgForm } from '@angular/forms';

import * as _ from 'lodash';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/shareReplay';

import { User } from '../types/user.type';

@Component({
  selector: "mco-user-data-section",
  templateUrl: "./user-data-section.component.html",
  styleUrls: ["./user-data-section.component.scss"]
})

export class userSelectionComponent implements OnInit {
  
  public users: Array<User>; // full list of users returned for the json call
  public selectedUser: User; // currently selected user, using the User model

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get("/assets/mock/test/test.json")
      .map(data => _.values(data))
      .shareReplay()
      .subscribe(data => {

        this.users = data;
        this.selectedUser = data[0]; // take the first user as the default

      });
  }

  /*
   * value is returned from an event emitter in userDataTableComponent
   * the event occurs when a user is selected on the user table in userDataTableComponent
   */

  userSelected(user) {
    this.selectedUser = (user);
  }


}