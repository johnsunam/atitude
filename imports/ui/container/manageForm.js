import { composeWithTracker } from 'react-komposer';
import {FormDb} from '../../api/form/collection/form.collection.js'
import ManageForm from '../../ui/components/aptitude/form/manageForm.jsx'
const composer = ( props, onData ) => {
    var Subcription=Meteor.subscribe('getForm');
    if(Subcription.ready()){
      let data=FormDb.find().fetch();
      let forms= data?data:[]
      console.log(forms);
        onData( null, {forms} )
      }

  };


export default composeWithTracker(composer)(ManageForm);
