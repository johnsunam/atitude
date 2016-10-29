import {ClientDb} from "./collection/client.collection.js"

Meteor.methods({
  'addClient':function(record){
    return ClientDb.insert(record);
  },
  'deleteClient':function(id){
    ClientDb.remove({_id:id});
  }

})
