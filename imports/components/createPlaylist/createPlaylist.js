import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './createPlaylist.html';
 
class CreatePlaylistCtrl {
  constructor() {
    
  }
}
 
export default angular.module('createPlaylist', [
  angularMeteor
])
  .component('createPlaylist', {
    templateUrl: 'imports/components/createPlaylist/createPlaylist.html',
    controller: CreatePlaylistCtrl
  });