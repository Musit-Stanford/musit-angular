import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Users } from '../../api/users.js';
import { Recommendations } from '../../api/recommendations.js';

import template from './friendList.html';
import uiRouter from 'angular-ui-router';
 
class FriendListCtrl {
  constructor($scope, $stateParams) {
    'ngInject';
    $scope.viewModel(this);
    $scope.toggle = false;
    this.selectedFriends = {};
    this.helpers({
      users() {
        return Users.find({});
      },
    });
  }

  viewFriend(friend) {
    /* route to new view */
  }

  toggleFriend(friend) {
    if (friend.name in this.selectedFriends) {
      delete this.selectedFriends[friend.name];
    } else {
      this.selectedFriends[friend.name] = friend.img;
    }
    console.log(this.selectedFriends);
  }

  submit() {
    window.localStorage.setItem('selectedFriends', JSON.stringify(this.selectedFriends));
    window.location = "/success";
    var recommendation = JSON.parse(window.localStorage.getItem('inProgressForm'));
    Recommendations.insert(recommendation);
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
