import { composeWithTracker } from 'react-komposer';
import {UserDb} from '../../api/user/collection/user.collection.js'
import ManageUser from '../components/user/manageUser.jsx'
const composer = ( props, onData ) => {
    var subcription=Meteor.subscribe('getUser');
    if(subcription.ready()){
        var users=UserDb.find().fetch();

        onData( null, {users } )
      }

  };


export default composeWithTracker(composer)(ManageUser);