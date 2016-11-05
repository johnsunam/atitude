import { composeWithTracker } from 'react-komposer';
import {FlowRouter} from 'meteor/kadira:flow-router';
import MainLayout from '../layouts/mainLayout.jsx';
const composer = ( props, onData ) => {
    if(Meteor.userId()){
      console.log(Roles.userIsInRole(Meteor.userId(),'super-admin' ));
      if(Roles.userIsInRole(Meteor.userId(),'super-admin' ))
      {
        FlowRouter.go('/add-client-user')
      }
      else{let user=Meteor.user()
        onData( null, {user} )
      }
      }
      else{
        FlowRouter.go('/login')
      }
  };


export default composeWithTracker(composer)(MainLayout);
