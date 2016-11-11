import {ClientRoleDb} from './collection/clientRole.collection.js'


Meteor.methods({
  'addClientRole':function(record){
    return ClientRoleDb.insert(record)
  },
  'deleteClientRole':function(id){
    ClientRoleDb.remove({_id:id})
  },
  'editClientRole':function(record){
    ClientRoleDb.update({_id:record.id},{$set:record.data})
  }
})
