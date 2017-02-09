import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Users } from '../../api/accounts.js';
import { Recommendations } from '../../api/recommendations.js';
import { Playlists } from '../../api/playlists.js';

import template from './friendList.html';
import uiRouter from 'angular-ui-router';

class FriendListCtrl {
  constructor($scope, $stateParams) {
    'ngInject';
    $scope.viewModel(this);
    $scope.toggle = false;
    this.selectedFriends = {};
    this.helpers({
      friends() {
        return Meteor.users.find({
          _id: {
            $ne: Meteor.userId()
          }
        });
      },
    });
  }

  toggleFriend(friend) {
    if (friend._id in this.selectedFriends) {
      delete this.selectedFriends[friend._id];
    } else {
      this.selectedFriends[friend._id] = friend;
    }
    console.log(this.selectedFriends);
  }

  submit() {
    window.localStorage.setItem('selectedFriends', JSON.stringify(this.selectedFriends));
    var recommendation = JSON.parse(window.localStorage.getItem('inProgressForm'));
    console.log(this.selectedFriends);
    Object.keys(this.selectedFriends).forEach(function (friendId) {
      recommendation.to_user = friendId;
      var defaultPlaylist = Playlists.findOne({"owner": friendId, "title": "Default"});
      recommendation.playlistId = defaultPlaylist._id;
      Recommendations.insert(recommendation);
    });
    window.location = "/success";
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