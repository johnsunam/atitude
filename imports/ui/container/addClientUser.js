import { composeWithTracker } from 'react-komposer';
import {RoleDb} from '../../api/role/collection/role.collection.js'
import {ClientDb} from '../../api/clients/collection/client.collection.js'
import AddClientUser from '../../ui/components/client/clientUser/addClientUser.jsx'
const composer = ( props, onData ) => {
    var Subcription=Meteor.subscribe('getRole');
    var Subcription=Meteor.subscribe('getAccount');
    var subcription=Meteor.subscribe('getClient');
    if(subcription.ready()){
      let user=Meteor.user();
      console.log(user);
      let data=ClientDb.findOne({email:user.emails[0].address});

       data=data?data:[]

        onData( null, {data} )
      }

  };


export default composeWithTracker(composer)(AddClientUser);
