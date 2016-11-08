import { composeWithTracker } from 'react-komposer';
import {FlowRouter} from 'meteor/kadira:flow-router';
import MainLayout from '../layouts/mainLayout.jsx';
const composer = ( props, onData ) => {

    if(Meteor.userId()){

      if(Roles.userIsInRole(Meteor.userId(), 'aptitude-admin' )){
        let user=Meteor.userId()
        onData( null, {user} )
      }

    }
    else {
      FlowRouter.go('/aptitude/login')
    }

  };


export default composeWithTracker(composer)(MainLayout);
