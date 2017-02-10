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
  console.log(user); 
  FBGraph.setAccessToken(user.services.facebook.accessToken);
  FBGraph.get("me?fields=name,picture", function(err, res) {
	console.log(res.picture.data.url); // { picture: 'http://profile.ak.fbcdn.net/'... }
	user.imageURL = res.picture.data.url;
  });
})

Meteor.publish("usersFriends", function() {
  return Meteor.users.find();
})