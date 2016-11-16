import {UserDb} from "./collection/user.collection.js"
import {Accounts} from 'meteor/accounts-base'
Meteor.methods({
  'addUser':function(record){

    user=Accounts.createUser({email:record.email,password:"aptitude123"});
     user?UserDb.insert(record):'';
     Roles.addUsersToRoles(user,'aptitude-admin');
     console.log(user);
     return user;
  },
  'deleteUser':function(id){
    UserDb.remove({_id:id});
  },
  'editUser':function(record){
    return UserDb.update({_id:record.id},{$set:record.data})
  }

})
