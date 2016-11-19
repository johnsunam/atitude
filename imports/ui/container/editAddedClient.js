import { composeWithTracker } from 'react-komposer';
import {ClientDb} from '../../api/clients/collection/client.collection.js'
import ManageClient from '../components/aptitude/client/addClient.jsx'
const composer = ( props, onData ) => {
  console.log(props);
    var subcription=Meteor.subscribe('getClient');
    if(subcription.ready()){
        var client=ClientDb.findOne({_id:props.client.id});

        console.log(client);
        onData( null, {client} )
      }

  };


export default composeWithTracker(composer)(ManageClient);
