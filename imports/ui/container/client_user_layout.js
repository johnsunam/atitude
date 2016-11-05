import { composeWithTracker } from 'react-komposer';
import {FlowRouter} from 'meteor/kadira:flow-router';
import ClientUserLayout from '../layouts/client_user_layout.jsx';
const composer = ( props, onData ) => {
  console.log(Meteor.userId());
    if(Roles.userIsInRole(Meteor.userId(),'user' ))
    {
      let user=Roles.userIsInRole(Meteor.userId(),'user' );
        onData( null, {user} )
      }
      else{
        console.log(Roles.userIsInRole(Meteor.userId(),'user' ));
        FlowRouter.go('/client/user/login');
      }


  };


export default composeWithTracker(composer)(ClientUserLayout);
