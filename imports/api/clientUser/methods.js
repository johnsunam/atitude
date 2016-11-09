import {ClientUserDb} from './collection/clientUser.collection.js'
import {ClientDb} from '../clients/collection/client.collection.js'
import {Random } from 'meteor/random'

Meteor.methods({
  'addClientUser':function(record){
    console.log(record);

    let userId=Accounts.createUser({email:record.email,password:"aptitude123"})
    Roles.addUsersToRoles(userId,record.userType);
    if(record.userType=="client"){
      ClientDb.insert(record);
    }
    else {
      ClientUserDb.insert(record);
    }


  },
  'editClientUser':function(record){
    ClientRoleDb.update({_id:record.id},{$set:record.data})
  }
})
