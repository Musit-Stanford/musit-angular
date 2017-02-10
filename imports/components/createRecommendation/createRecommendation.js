import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './createRecommendation.html';
import {
  Recommendations
}
from '../../api/recommendations.js';
import uiRouter from 'angular-ui-router';


class RecommenderCtrl {
  constructor($scope, $stateParams, $reactive) {
    'ngInject';
    $reactive(this).attach($scope);
    $scope.viewModel(this);
    $scope.trackChosen = false;

    this.helpers({
      recommendations() {
        return Recommendations.find({});
      }
    })
    
    this.searchTracks = (scope, query) => {
      this.call('searchSuggestions', query, (err, result) => {this.results = result});
    }
  }

  choseTrack($scope, track) {
    $scope.trackChosen = true;
    $scope.selectedTrack = track;
    var iframe = document.createElement("iframe");
    iframe.src = "https://embed.spotify.com/?uri=" + track.uri;
    iframe.allowtransparency = true;
    iframe.width = 300;
    iframe.height = 80;
    iframe.frameborder = 0;
    document.getElementById("iframe-container").appendChild(iframe)
  }

//  searchTracks($scope, query) {
//    console.log(query)
//    Meteor.call('searchSuggestions', [query], (err, result) => {this.results = result})
//  }

  unselectTrack($scope) {
    $scope.trackChosen = false;
  }

  addRecommendation(newRecommendation) {
    // Insert a task into the collection
    Recommendations.insert({
      title: newRecommendation.title,
      artist: newRecommendation.artist,
      album: newRecommendation.album,
      album_art_url: newRecommendation.album_art_url,
      from_user: Meteor.user()._id,
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
    console.log(Meteor.user().name);
    var recommendation = {
      title: track.name,
      artist: track.artists[0].name,
      albumArtURL: track.album.images[0].url,
      spotifyID: track.id,
      message: message,
      from_user: Meteor.user()._id, // SECURITY ISSUE
      from_user_name: Meteor.user().services.facebook.name
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
    controller: ['$scope', '$stateParams', '$reactive', RecommenderCtrl] // Note to self: Injecting '$scope' into the controller.
  });