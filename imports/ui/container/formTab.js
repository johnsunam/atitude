import { composeWithTracker } from 'react-komposer';
import {FormDb} from '../../api/form/collection/form.collection.js'
import FormTab from '../components/app/dashboard/formTab.jsx'
const composer = ( props, onData ) => {
    var subcription=Meteor.subscribe('getForm');
    console.log(props);
    if(subcription.ready()){
        var form=FormDb.findOne({name:props.form});

        onData( null, {form} )
      }

  };


export default composeWithTracker(composer)(FormTab);
