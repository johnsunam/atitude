import {UserDb} from "./collection/user.collection.js"

Meteor.methods({
  'addUser':function(record){
    return UserDb.insert(record);
  },
  'deleteUser':function(id){
    UserDb.remove({_id:id});
  },
  'editUser':function(record){
    return UserDb.update({_id:record.id},{$set:record.data})
  }

})
