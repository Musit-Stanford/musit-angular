// musit.controller('TrendingCtrl', ['$scope', function($scope) {
//   $scope.trends = [
//     { 
//         text: "Rap", 
//         imgURL: "http://www.kansascitypos.com/tt/icon.png", 
//         color: "#F1D087"
//       }, { 
//         text: 'Pop', 
//         imgURL: 'http://pngimg.com/upload/small/microphone_PNG7928.png', 
//         color: "#A0F3CF"
//      }, { 
//        text: 'Rock', 
//        imgURL: 'https://www.shareicon.net/data/128x128/2016/09/27/836153_festival_512x512.png',
//        color: "#A258BE"
//     }
//   ]
// }]);


import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router'
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
        imgURL: "", 
        color: "#1abc9c"
      }, { 
        text: 'Pop', 
        imgURL: '', 
        color: "#3498db"
      }, { 
        text: 'Rock', 
        imgURL: '',
        color: "#16a085"
      }, { 
        text: 'Hip-Hop', 
        imgURL: '',
        color: "#2980b9"
      }, { 
        text: 'Classic', 
        imgURL: '',
        color: "#e2a646"
      }, { 
        text: 'Country', 
        imgURL: '',
        color: "#e67e22"
      }, { 
        text: 'Jazz', 
        imgURL: '',
        color: "#f39c12"
      }, { 
        text: 'Electronic', 
        imgURL: '',
        color: "#c0392b"
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
  angularMeteor,
  uiRouter
])
  .component('trending', {
    templateUrl: 'imports/components/trending/trending.html',
    controller: ['$scope', TrendingCtrl] // Note to self: Injecting '$scope' into the controller.
  })

  .config(config);
 
function config($stateProvider) {
  'ngInject';
  $stateProvider
    .state('trends', {
      url: '/trends',
      template: '<trending></trending>'
    });
};