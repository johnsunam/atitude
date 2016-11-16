import {FormDb} from './collection/form.collection.js'


Meteor.methods({
  'addForm':function(form){
    return FormDb.insert(form)
  },
  'editForm':function(form){
    return FormDb.update({_id:form.id},{$set:form.data })
  },
  'deleteForm':function(id){
    return FormDb.remove({_id:id})
  }
})
