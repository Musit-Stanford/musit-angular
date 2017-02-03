import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Users } from '../../api/users.js';
import { Playlists } from '../../api/playlists.js';

import template from './playlistList.html';
import uiRouter from 'angular-ui-router';
 
class PlaylistListCtrl {
  constructor($scope, $stateParams) {
    $scope.viewModel(this);
  
    var playlistTitle = $stateParams.playlistId;

    var recs = [{"img": "https://i1.sndcdn.com/artworks-000202711802-kd99z8-t500x500.jpg", "track": "Too Soon", "artist": "VANIC", "from": {"img": "https://scontent-sjc2-1.xx.fbcdn.net/v/t31.0-8/13115918_10154011289885259_369530075324702060_o.jpg?oh=1ea9d7e934a89a30dc5cc0e5f4577bde&oe=58FEADFB", "name": "Jared Wolens"}}, {"img": "https://thecreatorsproject-images.vice.com/content-images/contentimage/no-slug/052aa27199b851a5044e7b96fcac830e.jpg", "track": "Currents", "artist": "Tame Impala", "from": {"img": "https://scontent-sjc2-1.xx.fbcdn.net/v/t31.0-8/13115918_10154011289885259_369530075324702060_o.jpg?oh=1ea9d7e934a89a30dc5cc0e5f4577bde&oe=58FEADFB", "name": "Jared Wolens"}}, {"img": "http://img11.deviantart.net/bd94/i/2013/361/7/5/lights_album_art_by_bonvallet-d6ylvvi.png", "track": "Lights", "artist": "Wolfgun", "from": {"img": "https://scontent.fsnc1-1.fna.fbcdn.net/v/l/t1.0-9/13962719_10157397602405002_4160153943137783782_n.jpg?oh=dbcbf366e8b5707c43342a8aa183e7f4&oe=59091B8E", "name": "Naomi Rasooly"}}, {"img": "http://www.drodd.com/images16/album-art2.jpg", "track": "Elegy", "artist": "Tycho", "from": {"img": "https://scontent.fsnc1-1.fna.fbcdn.net/v/t31.0-8/13669492_10154233215305259_6452427102081529145_o.jpg?oh=ecafb3ce312a3b43158fbccf8ed8641e&oe=591445C6", "name": "Jack Richardson"}}];

    this.helpers({
      playlistName() {
        return playlistTitle;
      },
      recommendations() {
        return recs;
      }
    })
  }

  viewRecommendation(rec) {
    /* route to new view */
  }
}
 
export default angular.module('playlistList', [
  angularMeteor,
  uiRouter
])
  .component('playlistList', {
    templateUrl: 'imports/components/playlistList/playlistList.html',
    controller: ['$scope', '$stateParams', PlaylistListCtrl]
  });

