import {WorkflowDb} from "./collection/workflow.collection.js"

Meteor.methods({
  'addWorkFlow':function(record){
    return WorkflowDb.insert(record);
  },
  'deleteWorkFlow':function(id){
    WorkflowDb.remove({_id:id});
  },
  'editWorkFlow':function(record){
  return  WorkflowDb.update({_id:record.id},{$set:record.data})
  }

})
