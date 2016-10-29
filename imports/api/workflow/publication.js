import {WorkflowDb} from './collection/workflow.collection.js'

Meteor.publish('getWorkFlow',function(){
  return WorkflowDb.find();
})
