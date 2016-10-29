import {PageDb} from "./collection/page.collection.js"

Meteor.methods({
  'addPage':function(record){
    return PageDb.insert(record);
  },
  'deletePage':function(id){
    PageDb.remove({_id:id});
  }

})