import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Users } from '../../api/users.js';

import template from './homeScreen.html';
 
class MusitHomeCtrl {
  constructor($scope) {
    $scope.viewModel(this);
 
    this.helpers({
      users() {
        return Users.find({});
      }
    })
  }

  viewRecommendation(rec) {
    /* route to new view */
  }
}
 
export default angular.module('musitHome', [
  angularMeteor
])
  .component('musitHome', {
    templateUrl: 'imports/components/views/homeScreen.html',
    controller: ['$scope', MusitHomeCtrl]
  });
