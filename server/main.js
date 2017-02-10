import {
  Meteor
}
from 'meteor/meteor';
import {
  Playlists
}
from '../imports/api/playlists.js';
import {
  Trends
}
from '../imports/api/trends.js';
import {
  Recommendations
}
from '../imports/api/recommendations.js';
import {
  Accounts
}
from 'meteor/accounts-base';

Meteor.startup(() => {});

Accounts.onCreateUser(function (options, user) {
  Playlists.insert({
    owner: user._id,
    title: "Default"
  });
  user.name = user.services.facebook.name;
  return user;
})

Meteor.publish("usersFriends", function () {
  return Meteor.users.find({$ne: this.userId});
})

Meteor.methods({
  'searchSuggestions' (
    query
  ) {
    console.log(query)
    var url = "https://api.spotify.com/v1/search";
    var options = {
      params: {
        q: query,
        type: "artist,track"
      }
    }
    var results = HTTP.get(url, options).data;
    console.log(results);
    return results.tracks.items;
  }
})