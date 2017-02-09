import { Meteor } from 'meteor/meteor';
import { Playlists } from '../imports/api/playlists.js';
import { Trends } from '../imports/api/trends.js';
import { Recommendations } from '../imports/api/recommendations.js';
import { Accounts } from 'meteor/accounts-base';

Meteor.startup(() => {
});

Accounts.onCreateUser(function(options, user) {
    Playlists.insert({owner: user._id, title: "Default"});

  // Don't forget to return the new user object at the end!
  return user;
})