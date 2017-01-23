import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Users } from '../../api/users.js';

import template from './friendList.html';
import uiRouter from 'angular-ui-router';
 
class FriendListCtrl {
  constructor($scope, $stateParams) {
    'ngInject';
    $scope.viewModel(this);
 
    this.helpers({
      users() {
        return Users.find({});
      }
    })
  }

  viewFriend(friend) {
    /* route to new view */
  }
}
 
export default angular.module('friendList', [
  angularMeteor,
  uiRouter
])
  .component('friendList', {
    templateUrl: 'imports/components/friendList/friendList.html',
    controller: ['$scope', '$stateParams', FriendListCtrl]
  });
