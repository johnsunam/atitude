import { composeWithTracker } from 'react-komposer';
import {ClientDb} from '../../api/clients/collection/client.collection.js'
import ManageClient from '../components/aptitude/client/manageClient.jsx'
const composer = ( props, onData ) => {
    var subcription=Meteor.subscribe('getClient');
    if(subcription.ready()){
        var data=ClientDb.find().fetch();
        clients=data?data:[];
        console.log(clients);
        onData( null, {clients} )
      }

  };


export default composeWithTracker(composer)(ManageClient);
