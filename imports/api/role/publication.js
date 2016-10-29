import {RoleDb} from './collection/role.collection.js'

Meteor.publish('getRole',function(){
  return RoleDb.find();
})