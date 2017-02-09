import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './createRecommendation.html';
import { Recommendations } from '../../api/recommendations.js';
import uiRouter from 'angular-ui-router';

class RecommenderCtrl {
  constructor($scope, $stateParams) {
    'ngInject';
    $scope.viewModel(this);

    this.helpers({
      recommendations() {
        return Recommendations.find({});
      }
    })
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

  submit(newPlaylist) {
    if (newPlaylist === undefined || !('artist' in newPlaylist) || !('title' in newPlaylist)) {
      alert("No recommendation provided.");
      return;
    }
    window.localStorage.setItem('inProgressForm', JSON.stringify(newPlaylist));
    window.location = "/friendList";
  }

}



export default angular.module('createRecommendation', [
  angularMeteor,
  uiRouter
])
  .component('createRecommendation', {
    templateUrl: 'imports/components/createRecommendation/createRecommendation.html',
    controller: ['$scope', '$stateParams', RecommenderCtrl] // Note to self: Injecting '$scope' into the controller.
  });