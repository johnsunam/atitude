import { composeWithTracker } from 'react-komposer';
import {DepartmentDb} from '../../api/department/collection/department.collection.js'
import ManageDepartment from '../../ui/components/department/manageClientDepartment.jsx'
const composer = ( props, onData ) => {
    var Subcription=Meteor.subscribe('getDepartment');
    if(Subcription.ready()){
      let data=DepartmentDb.find().fetch();
        onData( null, {data} )
      }

  };


export default composeWithTracker(composer)(ManageDepartment);
