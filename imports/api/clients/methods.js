import {ClientDb} from "./collection/client.collection.js"
import {Accounts} from 'meteor/accounts-base'
import {Email } from "meteor/email"
import {Random} from "meteor/random"
Meteor.methods({
  'addClient':function(record){
    ClientDb.insert(record);
    var userId=Accounts.createUser({email:record.email,password:"aptitude123"});

    Roles.addUsersToRoles( userId,'client' );
    return userId;
  //  Email.send({to:record.email,from:"johnsunam@hotmail.com",subject:"password",text:"aptitude123"});

  },
  'deleteClient':function(id){
    ClientDb.remove({_id:id});
  },
  'editClient':function(record){
    ClientDb.update({_id:record.id},{$set:record.data})
  },
  'saveRoles':function(data){
    console.log(data);
    ClientDb.update({_id:data.client},{$set:{roles:data.roles}})
  }

})
