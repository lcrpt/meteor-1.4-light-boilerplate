import '/imports/ui/components/posts/app-post.html'

import { Meteor } from 'meteor/meteor';
import { Bert } from 'meteor/themeteorchef:bert';
import { deletePost } from '/imports/api/posts/methods';

Template.App_post.helpers({
  dateFromNow(date){
    return moment(date).fromNow();
  },
});

Template.App_post.events({
  'click button.js-post-delete': (event, template) => {
    const id = template.data.post._id;

    deletePost.call(id, (error, result) => {
      if (!error) {
        Bert.alert('Success', 'success', 'growl-top-right');
      }else{
        Bert.alert('Error: ' + error, 'danger', 'growl-top-right');
      }
    });
  },
})
