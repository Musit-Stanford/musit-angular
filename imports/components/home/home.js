import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Users } from '../../api/users.js';

import template from './home.html';
import uiRouter from 'angular-ui-router';
 
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
 
export default angular.module('home', [
  angularMeteor,
  uiRouter
])
  .component('home', {
    templateUrl: 'imports/components/home/home.html',
    controller: ['$scope', MusitHomeCtrl]
  });

