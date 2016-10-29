import { composeWithTracker } from 'react-komposer';
import {ClientDb} from '../../api/clients/collection/client.collection.js'
import ManageClient from '../components/clients/manageClient.jsx'
const composer = ( props, onData ) => {
    var subcription=Meteor.subscribe('getClient');
    if(subcription.ready()){
        var clients=ClientDb.find().fetch();
        console.log(clients);
        onData( null, {clients} )
      }

  };


export default composeWithTracker(composer)(ManageClient);
