import { composeWithTracker } from 'react-komposer';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {PageDb} from '../../api/page/collection/page.collection.js'

import ClientUserLayout from '../layouts/clientUserLayout.jsx';
const composer = ( props, onData ) => {
  var subcription=Meteor.subscribe('getPage')
  if(Meteor.userId()){

    if(Roles.userIsInRole(Meteor.userId(), 'App User' )){

      if(subcription.ready()){
        let data= PageDb.find().fetch();
        let pages=data?data:[];
        onData( null, {pages} )
      }

    }

  }
  else {
    FlowRouter.go('/app/login')
  }



  };


export default composeWithTracker(composer)(ClientUserLayout);
