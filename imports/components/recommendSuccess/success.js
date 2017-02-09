import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Accounts } from '../../api/accounts.js';

import template from './success.html';
import uiRouter from 'angular-ui-router';
 
class SuccessCtrl {
  constructor($scope, $stateParams) {
    'ngInject';
    this.recommendation = JSON.parse(window.localStorage.getItem('inProgressForm'));
    this.selectedFriends = $.map(JSON.parse(window.localStorage.getItem('selectedFriends')), function(value, index) {return [value]})
    window.localStorage.setItem('inProgressForm', '');
    window.localStorage.setItem('selectedFriends', '');
    $scope.viewModel(this);
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
