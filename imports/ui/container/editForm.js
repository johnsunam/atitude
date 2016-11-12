import { composeWithTracker } from 'react-komposer';
import {FormDb} from '../../api/form/collection/form.collection.js'
import EditForm from '../components/aptitude/form/editForm.jsx'
const composer = ( props, onData ) => {
    var subcription=Meteor.subscribe('getForm');
    console.log(props);
        if(subcription.ready()){
        var form=FormDb.findOne({_id:props.id});
        onData( null, {form} )
      }

  };


export default composeWithTracker(composer)(EditForm);
