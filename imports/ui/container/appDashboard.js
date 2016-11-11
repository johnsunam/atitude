import { composeWithTracker } from 'react-komposer';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {PageDb} from '../../api/page/collection/page.collection.js';
import ClientUserLayout from '../components/app/dashboard/appDashboard.jsx';
const composer = ( props, onData ) => {
  var subcription=Meteor.subscribe('getPage')

      if(subcription.ready()){
        let data= PageDb.find().fetch();
        let pages=data?data:[];
        console.log(pages);
        onData( null, {pages} )
      }




  };


export default composeWithTracker(composer)(ClientUserLayout);
