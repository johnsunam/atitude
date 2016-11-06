import { composeWithTracker } from 'react-komposer';
import {PageDb} from '../../api/page/collection/page.collection.js'
import ClientUserSidebar from '../components/common/clientUserSidebar.jsx'
const composer = ( props, onData ) => {
    var subcription=Meteor.subscribe('getPage');

    if(subcription.ready()){
        var data=PageDb.find().fetch();
        onData( null, {data} )
      }

  };


export default composeWithTracker(composer)(ClientUserSidebar);
