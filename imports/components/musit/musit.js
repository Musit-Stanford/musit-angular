import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import '../../startup/accounts-config.js';

import template from './musit.html';
import Trending from '../trending/trending';
import playlist from '../playlist/playlist.js';
import createRecommendation from '../createRecommendation/createRecommendation';
import friendList from '../friendList/friendList';
import trendingList from '../trendingList/trendingList';
import success from '../recommendSuccess/success';
import playlistList from '../playlistList/playlistList';
import createPlaylist from '../createPlaylist/createPlaylist';
import Recommendation from '../recommendation/recommendation';
import MusitHome from '../home/home';
import Login from '../login/login';

class Musit {
}

const name = 'musit';

// create a module
export default angular.module(name, [
  angularMeteor,
  uiRouter,
  'accounts.ui',
  MusitHome.name,
  Recommendation.name,
  createRecommendation.name,
  friendList.name,
  success.name,
  playlist.name,
  createPlaylist.name,
  Login.name,
  playlistList.name
]).config(config)
  .controller('MusitController', controller)
  .component(name, {
    templateUrl: template,
    controllerAs: name,
    controller: 'MusitController'
  })

function config ($locationProvider, $urlRouterProvider, $stateProvider) {
  $locationProvider.html5Mode(true);

  //  $urlRouterProvider.otherwise('/');

  var homeState = {
    name: 'home',
    url: '/',
    template: '<home></home>',
  }
  $stateProvider.state(homeState);

  var loginState = {
    name: 'login',
    url: '/login',
    template: '<login></login>'
  }
  $stateProvider.state(loginState);

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

  var playlistListState = {
    name: 'playlistList',
    url: '/playlistList/:playlistId',
    template: '<playlist-list></playlist-list>'
  }
  $stateProvider.state(playlistListState);

  var createPlaylistState = {
    name: 'createPlaylist',
    url: '/createPlaylist',
    template: '<create-playlist></create-playlist>'
  }
  $stateProvider.state(createPlaylistState);

  var inboxState = {
    name: 'inbox',
    url: '/inbox',
    template: '<inbox></inbox>'
  }
  $stateProvider.state(inboxState);
}

function controller($scope) {
}


Meteor.autorun(function () {
  Meteor.subscribe("usersFriends");
  if (!Meteor.userId()) {} else {
    if (window.location.pathname !== "/" && window.location.pathname !== "/friendList" && window.location.pathname !== "/success") {
      window.location.href = "/";
    } else {
    }
  }
});
