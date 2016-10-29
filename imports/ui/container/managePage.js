import { composeWithTracker } from 'react-komposer';
import {PageDb} from '../../api/page/collection/page.collection.js'
import {ClientDb} from '../../api/clients/collection/client.collection.js'
import ManagePage from '../components/page/managePage.jsx'
const composer = ( props, onData ) => {
    var subcription=Meteor.subscribe('getPage');
    var clientSubcription=Meteor.subscribe('getClient');
    if(subcription.ready()){
        var pages=PageDb.find().fetch();
        var clients=ClientDb.find().fetch();
        let data={pages:pages,clients:clients}
        onData( null, {data } )
      }

  };


export default composeWithTracker(composer)(ManagePage);
