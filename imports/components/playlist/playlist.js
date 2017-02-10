import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './playlist.html';
import { Playlists } from '../../api/playlists.js';
import uiRouter from 'angular-ui-router';
import musit from '../musit/musit.js';

class PlaylistCtrl {
  constructor($scope, $rootScope, $stateParams) {
    'ngInject'
    $scope.viewModel(this);
    $rootScope.$broadcast('headerTextChanged', {text: 'playlists'});
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
  .controller('PlaylistController', ['$scope', '$rootScope', '$stateParams', function($scope, $rootScope, $stateParams) {
    $rootScope.$broadcast('headerTextChanged', {text: 'playlists'});
  }])
  .component('playlists', {
    templateUrl: 'imports/components/playlist/playlist.html',
    controller: PlaylistCtrl
  });
