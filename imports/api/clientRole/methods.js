import {ClientRoleDb} from './collection/clientRole.collection.js'


Meteor.methods({
  'addClientRole':function(record){
    ClientRoleDb.insert(record)
  },
  'deleteClientRole':function(id){
    ClientRoleDb.remove({_id:id})
  }
})
