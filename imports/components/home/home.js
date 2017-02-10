import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Recommendations } from '../../api/recommendations.js';
import { Accounts } from '../../api/accounts.js';
import { Meteor } from 'meteor/meteor';

import template from './home.html';
import uiRouter from 'angular-ui-router';

class MusitHomeCtrl {
  constructor($scope) {
    console.log(Meteor.user());
    if (!Meteor.userId()) {
      window.location.href = '/login';
    }

    $scope.viewModel(this);
    this.helpers({
      recommendations() {
        var userId = Meteor.user();
        if(userId) {
          var recommendations = Recommendations.find({"to_user": userId._id});
          $scope.recommendations = recommendations; 
          return recommendations;
        }
      },
      users() {
        return Accounts.find({});
      },
      currentUser() {
        return Meteor.user();
      },
      screenTitle() {
        return 'Your Stack';
      }
    });
  }

  findUsername(id) {
    var recommender = Meteor.users.findOne({"_id": id}); 
    return recommender.name;
  }
}

function autoPopulatePlaylist() {
  console.log(Meteor.user());
  var user = Meteor.users.find(Meteor.userId()).fetch();
  console.log(user);
  if (user.playlists === undefined) {
    Playlists.insert({
      songRecs: [],
      owner: Meteor.userId()
    }, function (err, doc) {
      Meteor.users.update({
        _id: Meteor.userId()
      }, {
        $push: {
          playlists: {
            name: "Default",
            _id: doc._id
          }
        }
      });
    })
  }
  return Meteor.users.findOne({
    _id: Meteor.userId()
  }).playlists;
}

export default angular.module('home', [
  angularMeteor,
  uiRouter
])
  .component('home', {
    templateUrl: 'imports/components/home/home.html',
    controller: ['$scope', MusitHomeCtrl]
  });