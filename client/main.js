import angular from 'angular';
import angularMeteor from 'angular-meteor';
import homeScreen from '../imports/components/views/homeScreen';

angular.module('musit', [
  angularMeteor,
  homeScreen.name
]);