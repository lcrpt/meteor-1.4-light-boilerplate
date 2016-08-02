import { Meteor } from 'meteor/meteor';
import { Posts } from '/imports/api/posts/posts.js';

Meteor.publish('posts', function(){
  return Posts.find();
});
