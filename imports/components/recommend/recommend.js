import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './recommend.html';
 
class RecommendCtrl {
  constructor() {
    
  }
}
 
export default angular.module('recommend', [
  angularMeteor
])
  .component('recommend', {
    templateUrl: 'imports/components/recommend/recommend.html',
    controller: RecommendCtrl
  });