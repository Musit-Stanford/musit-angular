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

import { name as Recommend } from '../recommend/recommend';
import Recommendation from '../recommendation/recommendation';
import MusitHome from '../views/homeScreen';

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
  success.name
]).component(name, {
  templateUrl: template,
  controllerAs: name,
  controller: Musit
})
  .config(config);

function config($locationProvider, $urlRouterProvider, $stateProvider) {
  'ngInject';

  $locationProvider.html5Mode(true);

  $urlRouterProvider.otherwise('/musit-home');

  var recommendationState = {
    name: 'recommendation',
    url: '/recommendation/:recId',
    template: '<recommend></recommend>'
  }
  $stateProvider.state(recommendationState);
}
