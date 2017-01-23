import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Users } from '../../api/users.js';

import template from './success.html';
import uiRouter from 'angular-ui-router';
 
class SuccessCtrl {
  constructor($scope, $stateParams) {
    'ngInject';
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
 
export default angular.module('success', [
  angularMeteor,
  uiRouter
])
  .component('success', {
    templateUrl: 'imports/components/recommendSuccess/success.html',
    controller: ['$scope', '$stateParams', SuccessCtrl]
  });
