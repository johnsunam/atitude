import { composeWithTracker } from 'react-komposer';
import Permission from '../components/aptitude/permission/permission.jsx';

const composer = ( props, onData ) => {
      if(Meteor.userId()){
        let admin=Roles.userIsInRole(Meteor.userId(), 'aptitude-admin');
        let clientAdmin=Roles.userIsInRole(Meteor.userId(), 'client-admin');
        let clientUser=Roles.userIsInRole(Meteor.userId(), 'client-user');
        let data=[admin,clientAdmin,clientUser];
        onData( null, {data} )
      }

  };


export default composeWithTracker(composer)(Permission);
