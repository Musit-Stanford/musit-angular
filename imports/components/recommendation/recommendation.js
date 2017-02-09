import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Recommendations } from '../../api/recommendations.js';

import template from './recommendation.html';
import uiRouter from 'angular-ui-router';
 
class RecommendationCtrl {
  constructor($scope, $stateParams) {
    'ngInject'


    $scope.viewModel(this);
    var track = Recommendations.findOne({"_id": $stateParams.recId});
    console.log(track)
    var iframe = document.createElement("iframe");
    iframe.src = "https://embed.spotify.com/?uri=spotify:track:" + track.spotifyID;
    iframe.allowtransparency = true;
    iframe.width = window.innerWidth/2;
    iframe.height = 80;
    iframe.frameborder=0;
    document.getElementById("iframe-container").appendChild(iframe)
 
    this.helpers({
      track() {
        return Recommendations.findOne({"_id": $stateParams.recId});
      }
    })
  }

  findUsername(id) {
    console.log(id);
    var recommender = Meteor.users.findOne({"_id": id}); 
    return recommender.profile.name; 
  }
}
 
export default angular.module('recommendation', [
  angularMeteor,
  uiRouter
])
  .component('recommendation', {
    templateUrl: 'imports/components/recommendation/recommendation.html',
    controller: ['$scope', '$stateParams', RecommendationCtrl]
  });
