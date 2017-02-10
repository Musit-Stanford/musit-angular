import { Meteor } from 'meteor/meteor';
import { Playlists } from '../imports/api/playlists.js';
import { Trends } from '../imports/api/trends.js';
import { Recommendations } from '../imports/api/recommendations.js';
import { Accounts } from 'meteor/accounts-base';

Meteor.startup(() => {
});

Accounts.onCreateUser(function(options, user) {
  Playlists.insert({owner: user._id, title: "Default"});
  user.name = user.services.facebook.name;
  return user;
})

Meteor.publish("usersFriends", function() {
  return Meteor.users.find();
})