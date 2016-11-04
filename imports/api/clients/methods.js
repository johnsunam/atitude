import {ClientDb} from "./collection/client.collection.js"

Meteor.methods({
  'addClient':function(record){
    return ClientDb.insert(record);
  },
  'deleteClient':function(id){
    ClientDb.remove({_id:id});
  },
  'editClient':function(record){
    console.log(record);
    ClientDb.update({_id:record.id},{$set:record.data})
  }

})
