import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Recommendations } from '../../api/recommendations.js';
import { Accounts } from '../../api/users.js';
import { Meteor } from 'meteor/meteor';

import template from './home.html';
import uiRouter from 'angular-ui-router';
 
class MusitHomeCtrl {
  constructor($scope) {
    if(!Meteor.userId()) {
      window.location.href = '/login'; 
    }

    $scope.viewModel(this);
 
    this.helpers({
      recommendations() {
        return Recommendations.find({})
      },
      users() {
        return Accounts.find({});
      },
      currentUser() {
        return Meteor.user(); 
      }
    })
  }
}
 
export default angular.module('home', [
  angularMeteor,
  uiRouter
])
  .component('home', {
    templateUrl: 'imports/components/home/home.html',
    controller: ['$scope', MusitHomeCtrl]
  });

