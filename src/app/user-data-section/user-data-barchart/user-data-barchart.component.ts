import { Component, Input, OnChanges } from '@angular/core';

import * as _ from 'lodash';

import { User } from '../../types/user.type';

@Component({
  selector: "mco-user-data-barchart",
  templateUrl: "./user-data-barchart.component.html",
  styleUrls: ["./user-data-barchart.component.scss"]
})

export class userDataBarchartComponent implements OnChanges {
 
  public axisIncrementArray: any; // container for all of the dymanic axis markers for the chart
  public postMin: number; // highest number of posts for the currently selected user
  public postMax: number; // lowest number of posts for the currently selected user
  public postCountWeeksAndPercentages: Array<any>;

  @Input() user:User;

  ngOnChanges(changes): void {
 
    this.generateBarChart(this.user);

  }

  /* 
   * Used to calculated the markers for the graph axis
   */

   calculateGraphAxisMarkers(min:number, max:number): number {
   
     let incrementNumber = Math.ceil((max - min) / 5); 

     return incrementNumber;
   
   }

  /*
   * Used to calculate the fill percentage for the bars of the chart
   */

  calculateBarFillPercentage(currentPostCount: number, postCountMax: number): number {

    let fillPercent = Math.ceil((currentPostCount / postCountMax) * 100);

    return fillPercent;

  }

  /*
   * Used to generate the bar chart dynamic axis markers and bars
   */

  generateBarChart(user:User) {

    let postCountValues: Array<any> = user.postCount;  // the array of objects containing the post count per week returned from the json
    let postCountMinMaxArray: Array<any> = []; // used to store only the min and max values from the post count per week array of objects returned from the json
    let axisIncrementNumber: number; // the calculated axis incremental value for the current range of post count min and maxes returned for the user


    /*
     * extract only the numberical post count values from the array of objects for the post count per week
     * we make the assumption that the post counts massively variable per user, so we want to adjust the chart's axis so it only shows the relevant min and max
     */

    for (var postCount of postCountValues) {

        postCountMinMaxArray.push(postCount.count);
    
    }    

    /*
     * Now we use lodash to get the min and max values from our new min/max array 
     * we make the assumption that there won't always be six full weeks of posts, as the user may have been registered for less than 6 weeks, 
     * so some weeks will have no posts yet
     */

    this.postMin = _.min(postCountMinMaxArray);
    this.postMax = _.max(postCountMinMaxArray);
    axisIncrementNumber = this.calculateGraphAxisMarkers(this.postMin, this.postMax);

    let fillPercentContainer = []; // this container will store the relevant fill percentages for the bar chart

    /*
     * We now have our min and max post counts, so we can loop again and calculate the percentages based on the max value
     */

    for (var postCount of postCountValues) {

      let fillPercent = this.calculateBarFillPercentage(postCount.count, this.postMax);
      
      fillPercentContainer.push({ 'number' : postCount.week, 'fillPercent' : fillPercent });
    
    }

    this.postCountWeeksAndPercentages = fillPercentContainer;

    /* 
     * Our bar chart has 5 markers on the axis, so we calculate what these will be dynamically
     */

    let i;
    let incrementCollection = [];

    for (i = 0; i <= 5; i++) {
      
      incrementCollection.push(axisIncrementNumber * i);

    }

    this.axisIncrementArray = _.reverse(incrementCollection); // we assign our increment values to be used in the view, and we reverse them so that they print correctly in the template loop

   }


}