import { composeWithTracker } from 'react-komposer';
import {WorkflowDb} from '../../api/workflow/collection/workflow.collection.js'
import {RoleDb} from '../../api/role/collection/role.collection.js'
import {ClientDb} from '../../api/clients/collection/client.collection.js'
import ManageWorkFlow from '../components/aptitude/workflow/manageWorkFlow.jsx'
const composer = ( props, onData ) => {
    var subcription=Meteor.subscribe('getWorkFlow');
    var subcription=Meteor.subscribe('getRole');
    var subcription=Meteor.subscribe('getClient')
    if(subcription.ready()){
      var roles=RoleDb.find().fetch();
      var clients=ClientDb.find().fetch();
      clients=clients?clients:[]
        var workflows=WorkflowDb.find().fetch();
        let data={roles:roles,clients:clients,workflows:workflows}
        onData( null, {data } )
      }

  };


export default composeWithTracker(composer)(ManageWorkFlow);
