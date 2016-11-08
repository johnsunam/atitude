import React from 'react'
import { composeWithTracker } from 'react-komposer';
import {ClientDb} from '../../api/clients/collection/client.collection.js'
import ClientCode from '../../ui/components/accounts/login/clientCode.jsx'


const composer = ( props, onData ) => {
    var Subcription=Meteor.subscribe('getClient');
    if(Subcription.ready()){
      let clients=ClientDb.find().fetch();

        onData( null, {clients} )
      }

  };


export default composeWithTracker(composer)(ClientCode);
