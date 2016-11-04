import {PageDb} from "./collection/page.collection.js"

Meteor.methods({
  'addPage':function(record){
    let result= PageDb.insert(record)
    return result;
  },
  'deletePage':function(id){
    PageDb.remove({_id:id});
  }

})
