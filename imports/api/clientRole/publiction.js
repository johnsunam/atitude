import {ClientRoleDb} from './collection/clientRole.collection.js'

Meteor.publish('getClientRole',function(){
  return ClientRoleDb.find();
})
