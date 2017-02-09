import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Recommendations } from '../../api/recommendations.js';
import { Accounts } from '../../api/users.js';
import { Recommendations } from '../../api/recommendations.js';
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
        var userId = Meteor.user();
        if(userId) {
          var recommendations = Recommendations.find({"to_user": userId._id});
          $scope.recommendations = recommendations; 
          return recommendations;
        }
      },
      users() {
        return Accounts.find({});
      },
      currentUser() {
        return Meteor.user(); 
      }
    });

    findUsername(id) {
      var recommender = Meteor.users.find({"_id": id}); 
      return recommender; 
    }
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

