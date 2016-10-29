import {WorkflowDb} from "./collection/workflow.collection.js"

Meteor.methods({
  'addWorkFlow':function(record){
    return WorkflowDb.insert(record);
  },
  'deleteWorkFlow':function(id){
    WorkflowDb.remove({_id:id});
  }

})