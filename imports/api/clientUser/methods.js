import {ClientUserDb} from './collection/clientUser.collection.js'


Meteor.methods({
  'addClientUser':function(record){
    ClientUserDb.insert(record)
  },
  'editClientUser':function(record){
    ClientRoleDb.update({_id:record.id},{$set:record.data})
  }
})
