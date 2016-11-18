import { composeWithTracker } from 'react-komposer';
import {FlowRouter} from 'meteor/kadira:flow-router';
import ClientAccountsLayout from '../layouts/clientAccountLayout.jsx';
const composer = ( props, onData ) => {

  if(Meteor.userId()){

    Roles.userIsInRole(Meteor.userId(), 'client')?FlowRouter.go('/client/dashboard'):FlowRouter.go('/client/login')
    }
    else{
      onData( null, {null} )
    }
  };


export default composeWithTracker(composer)(ClientAccountsLayout);
