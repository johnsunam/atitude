import {TaskDb} from "./collection/task.collection.js"

Meteor.methods({
  'addTask':function(record){
    return TaskDb.insert(record);
  },
  'deleteTask':function(id){
    TaskDb.remove({_id:id});
  },
  'editTask':function(record){
    return TaskDb.update({_id:record.id},{$set:record.data})
  }

})
