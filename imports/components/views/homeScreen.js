import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Users } from '../../api/users.js';

import template from './homeScreen.html';
 
class MusitHomeCtrl {
  constructor($scope) {
    $scope.viewModel(this);
 
    this.helpers({
      users() {
        return Users.find({});
      }
    });
  }
}
 
export default angular.module('musitHome', [
  angularMeteor
])
  .component('musitHome', {
    templateUrl: 'imports/components/views/homeScreen.html',
    controller: ['$scope', MusitHomeCtrl]
  });


// this.recs = [{
//   text: 'This is rec 1',
//   img: 'http://f4.bcbits.com/img/a3753111161_10.jpg',
//   recm: {
//     track: 'Hey Lover',
//     artist: 'Village, INCA',
//     album: ''
//   },
//   friend: {
//     name: 'James Geary',
//     img: 'https://scontent-sjc2-1.xx.fbcdn.net/v/t1.0-9/15697762_1755526128044941_128235100197194746_n.jpg?oh=40b862ef949c9aacdccd3169200642c9&oe=591B55C5'
//   }
// }, {
//   text: 'This is rec 2'
// }, {
//   text: 'This is rec 3'
// }];