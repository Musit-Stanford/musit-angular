import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './createPlaylist.html';

import {
  Playlists
}
from '../../api/playlists.js';
import uiRouter from 'angular-ui-router';

class CreatePlaylistCtrl {
  constructor($scope, $stateParms) {

  }

  addPlaylist(newPlaylist) {
    // Insert a task into the collection
    var newPlaylist = {
      title: newPlaylist.title,
      recCount: 0,
      albumArtURL: 'http://www.stateshirt.com/wp-content/uploads/2014/04/losthills_albumartwork_idea.jpg',
      owner: Meteor.userId(),
      createdAt: new Date
    };

    if (Meteor.user().playlists === undefined) {
      Meteor.users.update({
        _id: Meteor.userId()
      }, {
        $set: {
          playlists: []
        }
      });
    }

    Playlists.insert(newPlaylist, function (err, doc) {
      Meteor.users.update({
        _id: Meteor.userId()
      }, {
        $push: {
          playlists: {
            _id: doc._id,
            title: doc.title
          }
        }}, {}, function (err, doc) {
        window.location = '/playlist';
      });
    });

    // Clear form
    this.newPlaylist.title = "";
    this.newPlaylist.recCount = "";
    this.newPlaylist.albumArtURL = "";
  }
}

export default angular.module('createPlaylist', [
  angularMeteor,
  uiRouter
])
  .component('createPlaylist', {
    templateUrl: 'imports/components/createPlaylist/createPlaylist.html',
    controller: ['$scope', '$stateParams', CreatePlaylistCtrl]
  });