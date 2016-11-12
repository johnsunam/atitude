import { composeWithTracker } from 'react-komposer';
import {ClientRoleDb} from '../../api/clientRole/collection/clientRole.collection.js'
import {ClientUserDb} from '../../api/clientUser/collection/clientUser.collection.js'
import ManageClientUser from '../../ui/components/client/clientUser/manageClientUser.jsx'
const composer = ( props, onData ) => {
    var Subcription=Meteor.subscribe('getClientRole');
    var Subcription=Meteor.subscribe('getClientUser');
    if(Subcription.ready()){
      let roles=ClientRoleDb.find().fetch();
      let users=ClientUserDb.find().fetch();
      let data={roles:roles,users:users}
      console.log(data);
        onData( null, {data} )
      }

  };


export default composeWithTracker(composer)(ManageClientUser);
