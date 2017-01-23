import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Users } from '../../api/users.js';

import template from './recommendation.html';
import uiRouter from 'angular-ui-router';
 
class RecommendationCtrl {
  constructor($scope, $stateParams) {
    'ngInject'


    $scope.viewModel(this);
 
    this.helpers({
      users() {
        return Users.find({"name": $stateParams.recId});
      }
    })
  }

  viewRecommendation(rec) {
    console.log(rec);
  }
}
 
export default angular.module('recommend', [
  angularMeteor,
  uiRouter
])
  .component('recommend', {
    templateUrl: 'imports/components/recommendation/recommendation.html',
    controller: ['$scope', '$stateParams', RecommendationCtrl]
  });
