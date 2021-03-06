import {ClientDb} from "./collection/client.collection.js"
import {Meteor} from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base'
import {Email } from "meteor/email"
import {Random} from "meteor/random"
import { GetContactEmail } from '../email-template';

Meteor.methods({
  'addClient':function(record){

    var userId=Accounts.createUser({email:record.email,password:"aptitude123"});
      if(userId){
        ClientDb.insert(record);
          Roles.addUsersToRoles( userId,'client' );
          if(record.code){

  /*        Email.send({to:record.email,
                      from:"giribsaal@gmail.com",
                      subject:"Regarding Password Code",
                      html:GetContactEmail(record.code)
                     });
          console.log("Sent");*/
           }
      }





    return userId;

  },
  'deleteClient':function(id){
    ClientDb.remove({_id:id});
  },
  'editClient':function(record){
    ClientDb.update({_id:record.id},{$set:record.data})
  },
  'saveRoles':function(data){
    console.log(data);
    ClientDb.update({_id:data.client},{$set:{roles:data.data}})
  },
  'removeRoles':function(data){
    ClientDb.update({_id:data.client},{$set:{roles:data.roles}})
  }

})
