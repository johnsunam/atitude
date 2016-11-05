import { composeWithTracker } from 'react-komposer';
import {ClientRoleDb} from '../../api/clientRole/collection/clientRole.collection.js'
import ManageClientRole from '../components/client-admin/clientRole/manageClientRole.jsx'
const composer = ( props, onData ) => {
    var Subcription=Meteor.subscribe('getClientRole');
    if(Subcription.ready()){
      let data=ClientRoleDb.find().fetch();
        onData( null, {data} )
      }

  };


export default composeWithTracker(composer)(ManageClientRole);
