import {UserDb} from './collection/user.collection.js'

Meteor.publish('getUser',function(){
  return UserDb.find();
})