import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './inbox.html';
import uiRouter from 'angular-ui-router';

class InboxCtrl {
	constructor($scope, $stateParams) {
		'ngInject';
		$scope.viewModel(this);
      	this.helpers({
      		friends() {
        		return Meteor.users.find({_id: {$ne: Meteor.userId()}});
      		},
    	});
	}


}

export default angular.module('inbox', [
	angularMeteor,
	uiRouter
]).component('inbox', {
	templateUrl: 'imports/components/inbox/inbox.html',
	controller: ['$scope', '$stateParams', InboxCtrl]
});