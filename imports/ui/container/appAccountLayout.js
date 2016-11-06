import { composeWithTracker } from 'react-komposer';
import {FlowRouter} from 'meteor/kadira:flow-router';
import AppAccountsLayout from '../layouts/appAccountLayout.jsx';
const composer = ( props, onData ) => {

    if(Meteor.userId()){
      FlowRouter.go('/app/dashboard')
        }
      else{
        onData( null, {null} )
      }
  };


export default composeWithTracker(composer)(AppAccountsLayout);
