import {RoleDb} from "./collection/role.collection.js"

Meteor.methods({
  'addRole':function(record){
    return RoleDb.insert(record);
  },
  'deleteRole':function(id){
    RoleDb.remove({_id:id});
  },
'editRole':function(record){
    return RoleDb.update({_id:record.id},{$set:record.data})
  }

})
