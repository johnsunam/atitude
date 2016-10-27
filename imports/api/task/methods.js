import {TaskDb} from "./collection/task.collection.js"

Meteor.methods({
  'addTask':function(record){
    return TaskDb.insert(record);
  },
  'deleteTask':function(id){
    TaskDb.remove({_id:id});
  }

})
