import { composeWithTracker } from 'react-komposer';
import {PageDb} from '../../api/page/collection/page.collection.js'
import {ClientDb} from '../../api/clients/collection/client.collection.js'
import ManagePage from '../components/aptitude/page/managePage.jsx'
const composer = ( props, onData ) => {
    var subcription=Meteor.subscribe('getPage');

    if(subcription.ready()){
        var pages=PageDb.find({clientName:props.clientName}).fetch();

        let data={pages:pages,clients:clients}
        console.log(pages);
        onData( null, {data} )
      }

  };


export default composeWithTracker(composer)(ManagePage);
