import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Users } from '../../api/users.js';

import template from './homeScreen.html';
 
class RecommendationCtrl {
  constructor($scope) {
    $scope.viewModel(this);
 
    this.helpers({
      users() {
        return Users.find({});
      }
    })
  }

  viewRecommendation(rec) {
    console.log(rec);
  }
}
 
export default angular.module('musitRecommendCtrl', [
  angularMeteor
])
  .component('musitRecommendCtrl', {
    templateUrl: 'imports/components/recommendation/recommendation.html',
    controller: ['$scope', MusitHomeCtrl]
  });
