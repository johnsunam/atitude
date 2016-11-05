import '../imports/startup/server'
import { Meteor } from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base'

Meteor.startup(() => {
  if(!Meteor.users.findOne()){
    const userId=Accounts.createUser({username:"admin",password:"aptitude123"})
      Roles.addUsersToRoles( userId,'aptitude-admin' );
  }
});
