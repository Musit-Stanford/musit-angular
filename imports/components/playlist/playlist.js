import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './playlist.html';
import { Playlists } from '../../api/playlists.js';
import uiRouter from 'angular-ui-router';

class PlaylistCtrl {
  constructor($scope, $stateParams) {
    'ngInject'

    $scope.viewModel(this);

    this.helpers({
      playlists() {
        return Playlists.find({owner: Meteor.userId()});
      }
    })
  }
  
  goToPlaylist(playlist) {
    console.log(playlist._id._str)
  }

  addPlaylist(newPlaylist) {
    // Insert a task into the collection
    Playlists.insert({
      title: newPlaylist.title,
      recCount: newPlaylist.recCount,
      albumArtURL: newPlaylist.albumArtURL,
      createdAt: new Date
    });

    // Clear form
    this.newPlaylist.title = "";
    this.newPlaylist.recCount = "";
    this.newPlaylist.albumArtURL = "";
  }
}
export default angular.module('playlist', [
  angularMeteor,
  uiRouter
])
  .component('playlists', {
    templateUrl: 'imports/components/playlist/playlist.html',
    controller: ['$scope', '$stateParams', PlaylistCtrl] // Note to self: Injecting '$scope' into the controller.
  });
