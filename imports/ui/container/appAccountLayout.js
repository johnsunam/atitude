import { composeWithTracker } from 'react-komposer';
import {FlowRouter} from 'meteor/kadira:flow-router';
import AppAccountsLayout from '../layouts/appAccountLayout.jsx';
const composer = ( props, onData ) => {

  if(Meteor.userId()){
    onData( null, {null} )
      }
    else{
      onData( null, {null} )
    }
  };


export default composeWithTracker(composer)(AppAccountsLayout);
