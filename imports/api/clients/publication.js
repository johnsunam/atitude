import {ClientDb} from './collection/client.collection.js'

Meteor.publish('getClient',function(){
  return ClientDb.find();
})
