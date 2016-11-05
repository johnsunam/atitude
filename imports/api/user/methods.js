import {UserDb} from "./collection/user.collection.js"
import {Accounts} from 'meteor/accounts-base'
Meteor.methods({
  'addUser':function(record){
     UserDb.insert(record);
     let userId=Accounts.createUser({email:record.email,password:"aptitude123"})
     Roles.addUsersToRoles(userId,'user');
  },
  'deleteUser':function(id){
    UserDb.remove({_id:id});
  },
  'editUser':function(record){
    return UserDb.update({_id:record.id},{$set:record.data})
  }

})
