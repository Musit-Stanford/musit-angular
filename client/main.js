import angular from 'angular';
import angularMeteor from 'angular-meteor';
import playlist from '../imports/components/playlist/playlist.js'; 
import trending from '../imports/components/trending/trending.js';
import homeScreen from '../imports/components/views/homeScreen';
import recommend from '../imports/components/recommendation/recommendation';
import createRecommendation from '../imports/components/createRecommendation/createRecommendation';
import friendList from '../imports/components/friendList/friendList';
import success from '../imports/components/recommendSuccess/success';
import trendingList from '../imports/components/trendingList/trendingList';

var musit = angular.module('musit', [
  angularMeteor,
  homeScreen.name,
  playlist.name,
  trending.name,
  recommend.name,
  createRecommendation.name,
  friendList.name,
  success.name,
  trendingList.name
]);
