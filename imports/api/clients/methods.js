import {ClientDb} from "./collection/client.collection.js"
import {Accounts} from 'meteor/accounts-base'
import {Email } from "meteor/email"
import {Random} from "meteor/random"
Meteor.methods({
  'addClient':function(record){
    let ran=Random.hexString(7);
    record.clientCode=ran;

    ClientDb.insert(record);
    var userId=Accounts.createUser({email:record.email,password:"aptitude123"});

    Roles.addUsersToRoles( userId,'client' );
  //  Email.send({to:record.email,from:"johnsunam@hotmail.com",subject:"password",text:"aptitude123"});

  },
  'deleteClient':function(id){
    ClientDb.remove({_id:id});
  },
  'editClient':function(record){
    ClientDb.update({_id:record.id},{$set:record.data})
  }

})
