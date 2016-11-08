import React from 'react'
import { composeWithTracker } from 'react-komposer';
import {ClientUserDb} from '../../api/clientUser/collection/clientUser.collection.js'
import UserCode from '../../ui/components/app/login/userCode.jsx';

const composer = ( props, onData ) => {
    var Subcription=Meteor.subscribe('getClientUser');
    if(Subcription.ready()){
      let users=ClientUserDb.find().fetch();

        onData( null, {users} )
      }

  };


export default composeWithTracker(composer)(UserCode);
