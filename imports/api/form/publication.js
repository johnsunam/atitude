import {FormDb} from './collection/form.collection.js'

Meteor.publish('getForm',function(){
  return FormDb.find();
})
