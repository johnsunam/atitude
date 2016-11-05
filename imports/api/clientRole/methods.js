import {ClientRoleDb} from './collection/clientRole.collection.js'


Meteor.methods({
  'addClientRole':function(record){
    ClientRoleDb.insert(record)
  }

})
