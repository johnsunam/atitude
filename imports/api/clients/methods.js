import {ClientDb} from "./collection/client.collection.js"
import {Accounts} from 'meteor/accounts-base'
import {Email } from "meteor/email"
Meteor.methods({
  'addClient':function(record){
    ClientDb.insert(record);
    var userId=Accounts.createUser({email:record.email,password:"aptitude123",role:"super-admin"});
    Roles.addUsersToRoles( userId,'super-admin' );
    Email.send({to:record.email,from:"johnsunam@hotmail.com",subject:"password",text:"aptitude123"});
    console.log(userId);
  },
  'deleteClient':function(id){
    ClientDb.remove({_id:id});
  },
  'editClient':function(record){
    ClientDb.update({_id:record.id},{$set:record.data})
  }

})
