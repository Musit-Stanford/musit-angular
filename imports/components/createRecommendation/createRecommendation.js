import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './createRecommendation.html';
import { Recommendations } from '../../api/recommendations.js';
import uiRouter from 'angular-ui-router';


class RecommenderCtrl {
  constructor($scope, $stateParams) {
    'ngInject';
    $scope.viewModel(this);
    $scope.trackChosen = false;

    this.helpers({
      recommendations() {
        return Recommendations.find({});
      }
    })
}
  
    searchTracks($scope, query) {
    var url = "https://api.spotify.com/v1/search";
    var options = {
      params: {
        q: query,
        type: "artist,track"
      }
    }
    HTTP.get(url, options, function (error, result) {
      if (error === null) {
        var matchedTracks = result.data.tracks.items.slice(0, 20)
        $scope.results = matchedTracks;
      }
    });
  }
  
  choseTrack($scope, track) {
    $scope.trackChosen = true;
    $scope.selectedTrack = track;
    var iframe = document.createElement("iframe");
    iframe.src = "https://embed.spotify.com/?uri=" + track.uri;
    iframe.allowtransparency = true;
    iframe.width = 300;
    iframe.height = 80;
    iframe.frameborder=0;
    document.getElementById("iframe-container").appendChild(iframe)
  }
  
  unselectTrack($scope) {
    $scope.trackChosen = false;
  }

  addRecommendation(newRecommendation) {
    // Insert a task into the collection
    Recommendations.insert({
      title: newRecommendation.title,
      artist: newRecommendation.artist,
      album: newRecommendation.album,
      message: newRecommendation.message,
      createdAt: new Date
    });

    // Clear form
    this.newRecommendation.title = "";
    this.newRecommendation.artist = "";
    this.newRecommendation.album = "";
    this.newRecommendation.message = "";
  }

  submit(track, message, trackChosen) {
    if (!trackChosen) {
      alert("No track is chosen.");
    }
    if (message === undefined || message === "") {
      message = "I think you'll like this song!"
    }
    var recommendation = {
      title: track.name,
      artist: track.artists[0].name,
      albumArtURL: track.album.images[0].url,
      spotifyID: track.id,
      message: message
    }
    window.localStorage.setItem('inProgressForm', JSON.stringify(recommendation));
    window.location = "/friendList";
  }
}



export default angular.module('createRecommendation', [
  angularMeteor,
  uiRouter,
])
  .component('createRecommendation', {
    templateUrl: 'imports/components/createRecommendation/createRecommendation.html',
    controller: ['$scope', '$stateParams', RecommenderCtrl] // Note to self: Injecting '$scope' into the controller.
  });