import {TaskDb} from './collection/task.collection.js'

Meteor.publish('getTask',function(){
  return TaskDb.find();
})
