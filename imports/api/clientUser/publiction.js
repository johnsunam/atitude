import {ClientUserDb} from './collection/clientUser.collection.js'

Meteor.publish('getClientUser',function(){
  return ClientUserDb.find();
})
