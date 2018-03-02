# MCOTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.1.

# Installation

run npm install to install the required modules

# Setup

run ng serve to launch the app

# Notes

## CSS

1) The CSS uses the latest version of bootstrap's flexbox

2) The page was made to be responsive, but needs some clean up - the majority of the responsiveness is already there

## JSON

1) The JSON file is located in assets/mock/test/test.json

2) I've created 114 random users in the file

3) I've made the post counts and the week numbers as random as they might appear in reality

4) The file data is fetched with a get in userSelectionComponent - HttpClient automatically unsubscribes after first emit, so no need to unsubscribe 

## The Bar Chart 

1) I've made the axis markers dynamicly adjust to the random week numbers and post numbers, so the markers are always relevant to the current selected user

## Row Selection

I added a row selection dropdown that will add new rows to the user table, but I didn't have time to make a pager

## Components 

I've made 4 components: 

1) userSelectionComponent = the main component for the user selection section
2) userDataBarchartComponent = the bar chart
3) userDataGeneralInfoComponent = the general info that appears to the left of the bar chart
4) userDataTableComponent = the user listings table

There are comments for every function created within these components, as well as comments for the variables used

## Outputs and Inputs Examples

I've passed around some data between the components via @Input and also emitted user selections from the table component, to be used in the main component (this stores the selected user then passes that into the inputs of the chart and general info components)


