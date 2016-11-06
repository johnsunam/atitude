
import { composeWithTracker } from 'react-komposer';
import {ClientDb} from '../../api/clients/collection/client.collection.js'
import {FormDb} from '../../api/form/collection/form.collection.js'
import AddPage from '../components/aptitude/page/addPage.jsx'
const composer = ( props, onData ) => {
    var clinetSubcription=Meteor.subscribe('getClient');
    var formSubcription=Meteor.subscribe('getForm');
    if(formSubcription.ready()){
        var clients=ClientDb.find().fetch();
        var forms=FormDb.find().fetch();
        let data={clients:clients,forms:forms}
        console.log(data);
        onData( null, {data} )
      }

  };


export default composeWithTracker(composer)(AddPage);
