import { composeWithTracker } from 'react-komposer';
import {FlowRouter} from 'meteor/kadira:flow-router';
import AppLayout from '../layouts/appLayout.jsx';
const composer = ( props, onData ) => {

    if(Meteor.userId()){

      if(Roles.userIsInRole(Meteor.userId(), 'App User')){
        let user=Meteor.userId()
        onData( null, {user} )
      }

    }
    else {
        FlowRouter.go('/app/login')
    }

  };
  export default composeWithTracker(composer)(AppLayout);
