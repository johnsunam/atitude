import { composeWithTracker } from 'react-komposer';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {PageDb} from '../../api/page/collection/page.collection.js'

import ClientUserLayout from '../layouts/clientUserLayout.jsx';
const composer = ( props, onData ) => {
  var subcription=Meteor.subscribe('getPage');
  if(subcription.ready()){

  if(Meteor.userId())
    {
      var data=PageDb.find().fetch();
        onData( null, {data} )
      }
      else{

        FlowRouter.go('/app/login');
      }
    }

  };


export default composeWithTracker(composer)(ClientUserLayout);
