import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Users } from '../../api/users.js';

import template from './success.html';
 
class SuccessCtrl {
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
 
export default angular.module('success', [
  angularMeteor
])
  .component('success', {
    templateUrl: 'imports/components/recommendSuccess/success.html',
    controller: ['$scope', SuccessCtrl]
  });
