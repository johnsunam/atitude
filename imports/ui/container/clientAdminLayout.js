import { composeWithTracker } from 'react-komposer';
import {FlowRouter} from 'meteor/kadira:flow-router';
import ClientAdminLayout from '../layouts/clientAdminLayout.jsx';
import {Session } from  'meteor/session'
const composer = ( props, onData ) => {


      if(Meteor.userId()){

        if(Roles.userIsInRole(Meteor.userId(),'client' )){
          console.log(Meteor.userId())
          let user=Meteor.userId()
          onData( null, {user} )
      }

      }
    else{
      FlowRouter.go('/client/login')
    }





  };


export default composeWithTracker(composer)(ClientAdminLayout);
