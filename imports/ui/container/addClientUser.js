import { composeWithTracker } from 'react-komposer';
import {ClientRoleDb} from '../../api/clientRole/collection/clientRole.collection.js'
import AddClientUser from '../../ui/components/clientUser/addClientUser.jsx'
const composer = ( props, onData ) => {
    var Subcription=Meteor.subscribe('getClientRole');
    if(Subcription.ready()){
      let roles=ClientRoleDb.find().fetch();
      let data={roles:roles}
        onData( null, {data} )
      }

  };


export default composeWithTracker(composer)(AddClientUser);
