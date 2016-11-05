import {ClientUserDb} from './collection/clientUser.collection.js'


Meteor.methods({
  'addClientUser':function(record){
    ClientUserDb.insert(record)
  }

})
