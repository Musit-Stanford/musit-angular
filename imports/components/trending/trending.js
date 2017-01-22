import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './trending.html';
import {
  Trends
}
from '../../api/trends.js';

class TrendingCtrl {
  constructor($scope) {
    $scope.viewModel(this);

    this.trends = [
      { 
        text: "Rap", 
        imgURL: "http://www.kansascitypos.com/tt/icon.png", 
        color: "#F1D087"
      }, { 
        text: 'Pop', 
        imgURL: 'http://pngimg.com/upload/small/microphone_PNG7928.png', 
        color: "#A0F3CF"
      }, { 
        text: 'Rock', 
        imgURL: 'https://www.shareicon.net/data/128x128/2016/09/27/836153_festival_512x512.png',
        color: "#A258BE"
      }
    ]
        // this.helpers({
    //   trends() {
    //     return Trends.find({});
    //   }
    // })
  }

  addTrend(newTrend) {
    // Insert a task into the collection
    Trends.insert({
      text: newTrend.text,
      imgURL: newTrend.imgURL,
      createdAt: new Date
    });

    // Clear form
    this.newTrend.text = "";
    this.newTrend.imgURL = "";
  }
}

export default angular.module('trending', [
  angularMeteor
])
  .component('trending', {
    templateUrl: 'imports/components/trending/trending.html',
    controller: ['$scope', TrendingCtrl] // Note to self: Injecting '$scope' into the controller.
  });