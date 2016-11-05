import {PageDb} from "./collection/page.collection.js"

Meteor.methods({
  'addPage':function(record){
    let result= PageDb.insert(record)
    return result;
  },
  'deletePage':function(id){
    PageDb.remove({_id:id});
  },
  'editPage':function(record){
    console.log(record);
    PageDb.update({_id:record.id},{$set:record.data})
  }
})
