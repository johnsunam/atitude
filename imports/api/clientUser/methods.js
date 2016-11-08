import {ClientUserDb} from './collection/clientUser.collection.js'
import {Random } from 'meteor/random'

Meteor.methods({
  'addClientUser':function(record){
    console.log(record);
    record.userCode=Random.hexString(7);
    let userId=Accounts.createUser({email:record.email,password:"aptitude123"})
    Roles.addUsersToRoles(userId,record.userType);
    ClientUserDb.insert(record)

  },
  'editClientUser':function(record){
    ClientRoleDb.update({_id:record.id},{$set:record.data})
  }
})
