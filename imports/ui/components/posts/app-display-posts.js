import '/imports/ui/components/posts/app-display-posts.html';
import '/imports/ui/components/posts/app-post.js';

import { Meteor } from 'meteor/meteor';
import { Posts } from '/imports/api/posts/posts.js';

Template.App_display_posts.onCreated(function() {
  this.autorun(() => {
    this.subscribe('posts', this.data.role);
  });
})

Template.App_display_posts.helpers({
  posts(){
    return Posts.find();
  }
})
