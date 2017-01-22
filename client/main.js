import angular from 'angular';
import angularMeteor from 'angular-meteor';
import playlist from '../imports/components/playlist/playlist.js'; 
import trending from '../imports/components/trending/trending.js';
angular.module('simple-todos', [
  angularMeteor,
  playlist.name,
  trending.name
]);