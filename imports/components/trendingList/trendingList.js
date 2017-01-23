import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Users } from '../../api/users.js';

import template from './trendingList.html';
 
class TrendingListCtrl {
  constructor($scope) {
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
  angularMeteor
])
  .component('trendingList', {
    templateUrl: 'imports/components/trendingList/trendingList.html',
    controller: ['$scope', TrendingListCtrl]
  });
