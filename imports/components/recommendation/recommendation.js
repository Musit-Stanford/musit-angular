import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Users } from '../../api/users.js';

import template from './recommendation.html';
 
class RecommendationCtrl {
  constructor($scope) {
    $scope.viewModel(this);
 
    this.helpers({
      users() {
        return Users.find({"name": "James Geary"});
      }
    })
  }

  viewRecommendation(rec) {
    console.log(rec);
  }
}
 
export default angular.module('recommend', [
  angularMeteor
])
  .component('recommend', {
    templateUrl: 'imports/components/recommendation/recommendation.html',
    controller: ['$scope', RecommendationCtrl]
  });
