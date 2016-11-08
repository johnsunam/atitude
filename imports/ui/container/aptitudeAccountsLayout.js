import { composeWithTracker } from 'react-komposer';
import {FlowRouter} from 'meteor/kadira:flow-router';
import AptitudeAccountsLayout from '../layouts/aptitudeAccountLayout.jsx';
const composer = ( props, onData ) => {

    if(Meteor.userId()){
      onData( null, {null} )
        }
      else{
        onData( null, {null} )
      }
  };


export default composeWithTracker(composer)(AptitudeAccountsLayout);
