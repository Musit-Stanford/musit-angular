import angular from 'angular';
import angularMeteor from 'angular-meteor';
import playlist from '../imports/components/playlist/playlist.js'; 
import trending from '../imports/components/trending/trending.js';
import homeScreen from '../imports/components/views/homeScreen';

angular.module('musit', [
  angularMeteor,
  homeScreen.name,
  playlist.name,
  trending.name
]);