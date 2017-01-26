import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './musit.html';
import Trending from '../trending/trending';
import playlist from '../playlist/playlist.js'; 
import createRecommendation from '../createRecommendation/createRecommendation';
import friendList from '../friendList/friendList';
import trendingList from '../trendingList/trendingList';
import success from '../recommendSuccess/success';

import Recommendation from '../recommendation/recommendation';
import MusitHome from '../home/home';

class Musit {}

const name = 'musit';

// create a module
export default angular.module(name, [
  angularMeteor,
  uiRouter,
  Trending.name,
  MusitHome.name,
  Recommendation.name,
  createRecommendation.name,
  friendList.name,
  trendingList.name,
  success.name,
  playlist.name
]).component(name, {
  templateUrl: template,
  controllerAs: name,
  controller: Musit
})
  .config(config);

function config($locationProvider, $urlRouterProvider, $stateProvider) {
  'ngInject';

  $locationProvider.html5Mode(true);

  $urlRouterProvider.otherwise('/');

  var homeState = {
    name: 'home',
    url: '/',
    template: '<home></home>'
  }
  $stateProvider.state(homeState);

  var recommendationState = {
    name: 'recommendation',
    url: '/recommendation/:recId',
    template: '<recommendation></recommendation>'
  }
  $stateProvider.state(recommendationState);

  var playlistsState = {
    name: 'playlists',
    url: '/playlists/:recId',
    template: '<playlists></playlists>'
  }
  $stateProvider.state(playlistsState);

  var createRecommendationState = {
    name: 'createRecommendation',
    url: '/createRecommendation',
    template: '<create-recommendation></create-recommendation>'
  }
  $stateProvider.state(createRecommendationState);

  var friendListState = {
    name: 'friendList',
    url: '/friendList',
    template: '<friend-list></friend-list>'
  }
  $stateProvider.state(friendListState);

  var successState = {
    name: 'success',
    url: '/success',
    template: '<success></success>'
  }
  $stateProvider.state(successState);

  var trendingState = {
    name: 'trending',
    url: '/trending',
    template: '<trending></trending>'
  }
  $stateProvider.state(trendingState);

  var trendingListState = {
    name: 'trendingList',
    url: '/trendingList',
    template: '<trending-list></trending-list>'
  }
  $stateProvider.state(trendingListState);
}
