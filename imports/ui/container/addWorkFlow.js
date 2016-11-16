import { composeWithTracker } from 'react-komposer';
import {RoleDb} from '../../api/role/collection/role.collection.js'
import {ClientDb} from '../../api/clients/collection/client.collection.js'
import AddWorkFlow from '../components/aptitude/workflow/addWorkFlow.jsx'
const composer = ( props, onData ) => {
    var subcription=Meteor.subscribe('getRole');
    var subcription=Meteor.subscribe('getClient')
    if(subcription.ready()){
        var roles=RoleDb.find().fetch();
        var clients=ClientDb.find().fetch();
        console.log(clients);
        let data={roles:roles,clients:clients}
        onData( null, {data} )
      }

  };


export default composeWithTracker(composer)(AddWorkFlow);