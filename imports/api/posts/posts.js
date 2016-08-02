import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo'
import { SimpleSchema } from 'meteor/aldeed:simple-schema'

export const Posts = new Mongo.Collection('posts');

Posts.allow({
  insert: () => true,
  update: () => true,
  remove: () => true
});

Posts.deny({
  insert: () => false,
  update: () => false,
  remove: () => false
});

export const PostsSchema = new SimpleSchema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  createdAt: {
    type: Date,
    autoValue: function() {
      if (this.isInsert || this.isUpsert || this.isUpdate) {
        return new Date();
      }
    },
  }
});

Posts.attachSchema(PostsSchema);
