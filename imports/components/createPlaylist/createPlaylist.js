import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './createPlaylist.html';
 
import { Playlists } from '../../api/playlists.js';
import uiRouter from 'angular-ui-router';

class CreatePlaylistCtrl {
  constructor($scope, $stateParms) {
    
  }

  addPlaylist(newPlaylist) {
    // Insert a task into the collection
    Playlists.insert({
      title: newPlaylist.title,
      recCount: 0,
      albumArtURL: 'http://www.stateshirt.com/wp-content/uploads/2014/04/losthills_albumartwork_idea.jpg',
      createdAt: new Date
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