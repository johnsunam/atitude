import {DepartmentDb} from './collection/department.collection.js'


Meteor.methods({
  'addDepartment':function(record){
    DepartmentDb.insert(record)
  },
  'deleteDepartment':function(id){
    DepartmentDb.remove({_id:id});
  }
})
