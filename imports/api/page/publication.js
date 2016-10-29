import {PageDb} from './collection/page.collection.js'

Meteor.publish('getPage',function(){
  return PageDb.find();
})