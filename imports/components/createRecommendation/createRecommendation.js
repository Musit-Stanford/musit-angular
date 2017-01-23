import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './createRecommendation.html';
import { Recommendations } from '../../api/recommendations.js';

class RecommenderCtrl {
  constructor($scope) {
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
      message: newRecommendation.message,
      createdAt: new Date
    });

    // Clear form
    this.newRecommendation.title = "";
    this.newRecommendation.artist = "";
    this.newRecommendation.album = "";
    this.newRecommendation.message = "";
  }
}

export default angular.module('recommendation', [
  angularMeteor
])
  .component('recommender', {
    templateUrl: 'imports/components/createRecommendation/createRecommendation.html',
    controller: ['$scope', RecommenderCtrl] // Note to self: Injecting '$scope' into the controller.
  });