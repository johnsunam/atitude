import { composeWithTracker } from 'react-komposer';
import {FlowRouter} from 'meteor/kadira:flow-router';
import ClientAccountsLayout from '../layouts/clientAccountLayout.jsx';
const composer = ( props, onData ) => {

    if(Meteor.userId()){
      FlowRouter.go('/client')
        }
      else{
        onData( null, {null} )
      }
  };


export default composeWithTracker(composer)(ClientAccountsLayout);
