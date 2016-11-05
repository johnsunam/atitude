import {DepartmentDb} from './collection/department.collection.js'

Meteor.publish('getDepartment',function(){
  return DepartmentDb.find();
})
