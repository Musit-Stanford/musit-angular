import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Accounts } from '../../api/accounts.js';
import { Meteor } from 'meteor/meteor';

import template from './login.html';
import uiRouter from 'angular-ui-router';
 
class LoginCtrl {
  constructor($scope, $stateParams) {
    $scope.viewModel(this);
 
    this.helpers({
      users() {
        return Accounts.find({});
      },
      currentUser() {
        return Meteor.user(); 
      }
    })
  }
}
 
export default angular.module('login', [
  angularMeteor,
  uiRouter
])
  .component('login', {
    templateUrl: 'imports/components/login/login.html',
    controller: ['$scope', '$stateParams', LoginCtrl]
  });

