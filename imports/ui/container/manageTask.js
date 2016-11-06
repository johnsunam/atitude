import { composeWithTracker } from 'react-komposer';
import {TaskDb} from '../../api/task/collection/task.collection.js'
import ManageTask from '../components/aptitude/task/manageTask.jsx'
const composer = ( props, onData ) => {
    var subcription=Meteor.subscribe('getTask');
    if(subcription.ready()){
        var tasks=TaskDb.find().fetch();

        onData( null, {tasks } )
      }

  };


export default composeWithTracker(composer)(ManageTask);
