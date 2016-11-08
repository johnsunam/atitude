import { composeWithTracker } from 'react-komposer';
import {FormDataDb} from '../../api/formdata/collection/formdata.collection.js'
import FormDataList from '../../ui/components/app/dashboard/FormDataList.jsx'
const composer = ( props, onData ) => {
    var Subcription=Meteor.subscribe('getFormData');

    if(Subcription.ready()){
      console.log(props.page);
      let formdatas=FormDataDb.find({page:props.page,user:Meteor.userId()}).fetch();

        onData( null, {formdatas} )
      }

  };


export default composeWithTracker(composer)(FormDataList);
