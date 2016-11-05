import { composeWithTracker } from 'react-komposer';
import {RoleDb} from '../../api/role/collection/role.collection.js'
import ManageRole from '../components/admin/role/manageRole.jsx'
const composer = ( props, onData ) => {
    var subcription=Meteor.subscribe('getRole');
    if(subcription.ready()){
        var roles=RoleDb.find().fetch();

        onData( null, {roles } )
      }

  };


export default composeWithTracker(composer)(ManageRole);
