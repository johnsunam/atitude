import { composeWithTracker } from 'react-komposer';
import {FlowRouter} from 'meteor/kadira:flow-router';
import ClientAdminLayout from '../layouts/client_admin_layout.jsx';
const composer = ( props, onData ) => {
  console.log(Roles.userIsInRole(Meteor.userId(),'super-admin' ));
  if(Meteor.userId()){
    if(Roles.userIsInRole(Meteor.userId(),'super-admin' ))
    {
      let user=Meteor.user();
        onData( null, {user} )
      }
  }
      else{
        FlowRouter.go('/client-login')
      }
  };


export default composeWithTracker(composer)(ClientAdminLayout);
