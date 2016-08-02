import { Meteor } from 'meteor/meteor'
import { ValidatedMethod } from 'meteor/mdg:validated-method'
import { SimpleSchema } from 'meteor/aldeed:simple-schema'
import { Posts } from '/imports/api/posts/posts.js'

export const createPost = new ValidatedMethod({
  name: 'posts.insert',
  validate: null,
  run(doc) {
    Posts.insert(doc);
  }
});

export const deletePost = new ValidatedMethod({
  name: 'posts.delete',
  validate: null,
  run(id) {
    Posts.remove(id);
  }
});
