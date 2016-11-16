import {ClientUserDb} from './collection/clientUser.collection.js'
import {ClientDb} from '../clients/collection/client.collection.js'
import {Random } from 'meteor/random'

Meteor.methods({
  'addClientUser':function(record){


    let userId=Accounts.createUser({email:record.email,password:"aptitude123"})
    console.log(record);
    Roles.addUsersToRoles(userId,record.userType);
    if(record.userType=="client"){
      ClientDb.insert(record);
    }
    else {
      console.log(record);
      ClientUserDb.insert(record);
    }
    return userId;

  },
  'editClientUser':function(record){
    ClientUserDb.update({_id:record.id},{$set:record.data})
  }
})
