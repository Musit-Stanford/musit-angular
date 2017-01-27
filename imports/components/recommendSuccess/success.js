import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Users } from '../../api/users.js';

import template from './success.html';
import uiRouter from 'angular-ui-router';
 
class SuccessCtrl {
  constructor($scope, $stateParams) {
    'ngInject';
    this.recommendation = JSON.parse(window.localStorage.getItem('inProgressForm'));
    this.selectedFriends = $.map(JSON.parse(window.localStorage.getItem('selectedFriends')), function(value, index) {return [value]})
    window.localStorage.setItem('inProgressForm', '');
    window.localStorage.setItem('selectedFriends', '');
    console.log(this.recommendation)
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
