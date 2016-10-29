import { composeWithTracker } from 'react-komposer';
import {WorkflowDb} from '../../api/workflow/collection/workflow.collection.js'
import ManageWorkFlow from '../components/workflow/manageWorkFlow.jsx'
const composer = ( props, onData ) => {
    var subcription=Meteor.subscribe('getWorkFlow');
    if(subcription.ready()){
        var workflows=WorkflowDb.find().fetch();
        console.log(workflows);
        onData( null, {workflows } )
      }

  };


export default composeWithTracker(composer)(ManageWorkFlow);
