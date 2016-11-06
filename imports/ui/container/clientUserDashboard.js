import { composeWithTracker } from 'react-komposer';
import {FormDb} from '../../api/form/collection/form.collection.js'
import ClientUserDashboard from '../components/app/dashboard/dashboard.jsx'
const composer = ( props, onData ) => {
    var subcription=Meteor.subscribe('getForm');

    if(subcription.ready()){
        var form=FormDb.findOne({name:props.form});
        console.log();
        onData( null, {form} )
      }

  };


export default composeWithTracker(composer)(ClientUserDashboard);
