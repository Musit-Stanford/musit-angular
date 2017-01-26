import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Users } from '../../api/users.js';

import template from './trendingList.html';
import uiRouter from 'angular-ui-router';
 
class TrendingListCtrl {
  constructor($scope, $stateParams) {
    'ngInject';
    $scope.viewModel(this);
 
    this.helpers({
      users() {
        return Users.find({});
      }
    })
  }

  viewRecommendation(rec) {
    /* route to new view */
  }
}

export default angular.module('trendingList', [
  angularMeteor,
  uiRouter
])
  .component('trendingList', {
    templateUrl: 'imports/components/trendingList/trendingList.html',
    controller: ['$scope', '$stateParams', TrendingListCtrl]
  });
