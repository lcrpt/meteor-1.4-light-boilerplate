import '/imports/ui/components/posts/app-posts-form.html';

import { Meteor } from 'meteor/meteor';
import { Bert } from 'meteor/themeteorchef:bert';
import { createPost } from '/imports/api/posts/methods';

Template.App_posts_form.events({
  'submit .js-insert-form': (event, template) => {
    event.preventDefault();

    const doc = {
      title: template.find('[name="title"]').value.trim(),
      description: template.find('[name="description"]').value.trim(),
    }

    console.log('doc', doc);

    createPost.call(doc, (error, result) => {
      if (!error) {
        Bert.alert('Success', 'success', 'growl-top-right');
      }else{
        Bert.alert('Error: ' + error, 'danger', 'growl-top-right');
      }
    });
  }
})
